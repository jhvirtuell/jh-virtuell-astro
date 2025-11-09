// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compression from 'vite-plugin-compression';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://jh-virtuell.ch',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  // Server output with per-page prerendering for static routes
  adapter: node({ mode: 'standalone' }),
  output: 'server',
  prerender: { default: true },
  vite: {
    plugins: [compression()],
  },
});
