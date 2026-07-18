#!/usr/bin/env bash
#
# One-time setup: make clean (extensionless) URLs resolve on the S3 + CloudFront
# static host, and stop 404s from silently rendering the homepage.
#
# What it does:
#   1. Creates/updates + publishes the `tw-clean-urls` CloudFront Function
#      (source: infra/cloudfront-rewrite.js).
#   2. Associates it as a viewer-request function on the distribution's default
#      cache behavior.
#   3. Rewrites the distribution's custom error responses so 403/404 serve
#      /404.html with a real 404 status (removing the old SPA fallback that
#      served /index.html with 200 — the cause of "URL changes but homepage
#      shows").
#   4. Invalidates the cache.
#
# Requirements: awscli v2 + python3, and AWS credentials with CloudFront perms.
# This touches PRODUCTION. Run it once. Re-running is safe (idempotent).
#
# Usage:
#   ./infra/setup-clean-urls.sh              # apply
#   DRY_RUN=1 ./infra/setup-clean-urls.sh    # show the new config, apply nothing

set -euo pipefail

DISTRIBUTION_ID="${DISTRIBUTION_ID:-E3HAJ8WV6V8FFW}"
FUNCTION_NAME="${FUNCTION_NAME:-tw-clean-urls}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FUNCTION_CODE="${SCRIPT_DIR}/cloudfront-rewrite.js"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "==> Distribution: $DISTRIBUTION_ID   Function: $FUNCTION_NAME"

# --- 1. Create or update the CloudFront Function -----------------------------
if aws cloudfront describe-function --name "$FUNCTION_NAME" >/dev/null 2>&1; then
  ETAG=$(aws cloudfront describe-function --name "$FUNCTION_NAME" \
    --query 'ETag' --output text)
  echo "==> Updating existing function (ETag $ETAG)"
  aws cloudfront update-function \
    --name "$FUNCTION_NAME" \
    --if-match "$ETAG" \
    --function-config "Comment=Append .html to clean page URLs,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://${FUNCTION_CODE}" >/dev/null
else
  echo "==> Creating function"
  aws cloudfront create-function \
    --name "$FUNCTION_NAME" \
    --function-config "Comment=Append .html to clean page URLs,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://${FUNCTION_CODE}" >/dev/null
fi

# --- 2. Publish it (promotes DEVELOPMENT -> LIVE) ----------------------------
PUB_ETAG=$(aws cloudfront describe-function --name "$FUNCTION_NAME" \
  --query 'ETag' --output text)
echo "==> Publishing function (ETag $PUB_ETAG)"
aws cloudfront publish-function --name "$FUNCTION_NAME" --if-match "$PUB_ETAG" >/dev/null

FUNCTION_ARN=$(aws cloudfront describe-function --name "$FUNCTION_NAME" \
  --query 'FunctionSummary.FunctionMetadata.FunctionARN' --output text)
echo "==> Function ARN: $FUNCTION_ARN"

# --- 3. Update the distribution config ---------------------------------------
echo "==> Fetching distribution config"
aws cloudfront get-distribution-config --id "$DISTRIBUTION_ID" > "$WORK/full.json"
DIST_ETAG=$(python3 -c "import json,sys;print(json.load(open('$WORK/full.json'))['ETag'])")

python3 - "$WORK/full.json" "$WORK/config.json" "$FUNCTION_ARN" <<'PY'
import json, sys
full = json.load(open(sys.argv[1]))
cfg = full["DistributionConfig"]
arn = sys.argv[3]

# Associate the function on the default cache behavior (viewer-request).
dcb = cfg["DefaultCacheBehavior"]
dcb["FunctionAssociations"] = {
    "Quantity": 1,
    "Items": [{"FunctionARN": arn, "EventType": "viewer-request"}],
}

# Replace custom error responses: 403/404 -> /404.html with a real 404.
cfg["CustomErrorResponses"] = {
    "Quantity": 2,
    "Items": [
        {"ErrorCode": 403, "ResponsePagePath": "/404.html",
         "ResponseCode": "404", "ErrorCachingMinTTL": 10},
        {"ErrorCode": 404, "ResponsePagePath": "/404.html",
         "ResponseCode": "404", "ErrorCachingMinTTL": 10},
    ],
}

json.dump(cfg, open(sys.argv[2], "w"))
print("Prepared updated DistributionConfig.")
PY

if [[ "${DRY_RUN:-0}" == "1" ]]; then
  echo "==> DRY_RUN=1, not applying. Proposed config:"
  python3 -m json.tool "$WORK/config.json"
  exit 0
fi

echo "==> Applying distribution update (If-Match $DIST_ETAG)"
aws cloudfront update-distribution \
  --id "$DISTRIBUTION_ID" \
  --if-match "$DIST_ETAG" \
  --distribution-config "file://${WORK}/config.json" >/dev/null

# --- 4. Invalidate -----------------------------------------------------------
echo "==> Creating invalidation"
aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*" >/dev/null

echo "==> Done. Allow a few minutes for the deployment + invalidation to finish, then:"
echo "    curl -sSI https://www.toddlerworld.in/admissions   # expect HTTP/2 200"
echo "    curl -sSI https://www.toddlerworld.in/nope          # expect HTTP/2 404"
