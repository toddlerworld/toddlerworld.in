// CloudFront Function (JavaScript runtime 2.0), viewer-request event type.
//
// The site is built with Astro `build.format: 'file'`, so each page is a flat
// object like `admissions.html`. Internal links use clean, extensionless URLs
// (e.g. `/admissions`). This function rewrites an extensionless page request to
// its `.html` object so it resolves on S3 instead of 404-ing (which previously
// fell back to the homepage). Assets that already carry an extension
// (`/images/logo-black.png`, `/_astro/app.css`) pass through untouched.
function handler(event) {
  var req = event.request;
  var uri = req.uri;

  // Root is served by the distribution's default root object (index.html).
  if (uri === '/') {
    return req;
  }

  var lastSegment = uri.split('/').pop();

  // No dot in the final segment => a page route, not a file. Append `.html`
  // (stripping any trailing slash first).
  if (lastSegment.indexOf('.') === -1) {
    req.uri = uri.replace(/\/+$/, '') + '.html';
  }

  return req;
}
