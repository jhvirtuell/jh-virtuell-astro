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
  adapter: node({ mode: 'standalone' }),
  output: 'server',
  vite: {
    plugins: [compression()],
  },
});
