# infra

AWS-side configuration for the static S3 + CloudFront host.

## Clean-URL routing fix

The site is built with Astro `build.format: 'file'`, so pages are flat objects
(`admissions.html`) while internal links use clean URLs (`/admissions`). On
CloudFront the extensionless object 404s, and an old CRA-era custom error
response used to rewrite that to `/index.html` with a 200 — so the address bar
showed `/admissions` but the homepage rendered. It worked locally only because
`astro dev` resolves clean URLs itself.

**Fix:** a CloudFront viewer-request function that appends `.html` to page
routes, plus corrected error responses that serve `/404.html` with a real 404.

### Files

- `cloudfront-rewrite.js` — the CloudFront Function source (JS runtime 2.0).
- `setup-clean-urls.sh` — one-time apply script (create/publish/associate the
  function, fix error responses, invalidate). Idempotent; safe to re-run.

### Apply (once)

```bash
# Preview the change without touching anything:
DRY_RUN=1 ./infra/setup-clean-urls.sh

# Apply to production (distribution E3HAJ8WV6V8FFW):
./infra/setup-clean-urls.sh
```

Needs AWS credentials with CloudFront permissions (the same account used by the
deploy workflow) plus `awscli` v2 and `python3`.

### Verify

After the distribution redeploys and the invalidation completes (a few minutes):

```bash
curl -sSI https://www.toddlerworld.in/admissions   # HTTP/2 200
curl -s  https://www.toddlerworld.in/admissions | grep -o '<title>[^<]*'  # Admissions title
curl -sSI https://www.toddlerworld.in/nope         # HTTP/2 404
```

Re-run only if the distribution is ever recreated.
