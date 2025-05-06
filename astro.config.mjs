// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/revanfz.github.io/',
  integrations: [vue()],
  outDir: './docs',
  vite: {
    plugins: [tailwindcss()]
  }
});