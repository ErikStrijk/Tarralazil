// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // [DOMEIN INVULLEN] — nodig voor sitemap en Open Graph
  site: 'https://www.tarralazil.nl',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/agenda/': '/ceremonies/',
    '/diensten/': '/ceremonies/',
    '/over-ons/': '/over-mij/',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
