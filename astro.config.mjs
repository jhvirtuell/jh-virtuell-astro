// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compression from 'vite-plugin-compression';

export default defineConfig({
  site: 'https://jh-virtuell.ch',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  vite: {
    plugins: [compression()],
    resolve: {
      alias: {
        "swissqrbill/pdf": "swissqrbill/lib/pdf/Pdf.js",
        "swissqrbill/svg": "swissqrbill/lib/svg/Svg.js",
      },
    },
  },
});