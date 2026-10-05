// @ts-check
import { defineConfig } from 'astro/config';

// On GitHub Pages the deploy workflow sets SITE and BASE (e.g. https://user.github.io + /pradis).
// Locally both are unset, so the site runs at the root.
export default defineConfig({
  site: process.env.SITE || 'https://pradis.example.com',
  base: process.env.BASE || '/',
  server: { port: 4322 },
});
