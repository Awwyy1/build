// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Replace with the production domain once it is registered.
const SITE = 'https://example.is';

export default defineConfig({
  site: SITE,
  // Icelandic is the primary market; English, Polish and Latvian serve
  // foreign clients and the construction workforce applying via Careers.
  i18n: {
    defaultLocale: 'is',
    locales: ['is', 'en', 'pl', 'lv'],
    routing: { prefixDefaultLocale: true },
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
