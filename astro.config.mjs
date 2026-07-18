// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.toddlerworld.in',
  output: 'static',
  // Emit `about-us.html` instead of `about-us/index.html` so clean URLs resolve
  // on the existing S3 + CloudFront static hosting without extra rewrite rules.
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [react(), sitemap(), icon()],
});
