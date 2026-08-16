// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/*
 * Absolute base for the sitemap, the hreflang alternates and the canonical
 * tag. It has to be the address the site is actually served from, or those
 * point somewhere that does not exist. Swap this for the .is domain when it
 * is registered; nothing else needs touching.
 */
const SITE = 'https://byggingakerfi.vercel.app';

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
