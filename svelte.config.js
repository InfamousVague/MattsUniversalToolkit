import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from '@sveltejs/adapter-static';
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: '/UplinkWeb', // Ensure this is set for GitHub Pages deployment
    },
    adapter: adapter({
      fallback: '404.html', // Necessary for single-page apps to work correctly
    }),
  },
};

export default config;
