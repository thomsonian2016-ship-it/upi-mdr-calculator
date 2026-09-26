// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://upimdrcalculator.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      lastmod: new Date('2026-09-26'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', hi: 'hi-IN' },
      },
    }),
  ],
});
