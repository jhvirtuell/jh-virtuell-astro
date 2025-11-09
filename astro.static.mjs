// astro.static.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compression from 'vite-plugin-compression';

// Separate config for static builds (FTP deployment)
export default defineConfig({
  site: 'https://jh-virtuell.ch',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  vite: { plugins: [compression()] },
});

