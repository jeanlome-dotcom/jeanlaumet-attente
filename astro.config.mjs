import { defineConfig } from 'astro/config';
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://jeanlome-dotcom.github.io',
  base: process.env.BASE_PATH ?? '/jeanlaumet-attente',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
