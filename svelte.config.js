import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";
import path from "node:path";

const config = {
  preprocess: [vitePreprocess({})],
  kit: {
    paths: {
      base: '/UplinkWeb', // Ensure this matches your deployment path
    },
    adapter: adapter({
      fallback: '404.html', // Fallback for unmatched routes
    }),
    appDir: 'build/_app', // Custom app directory
    prerender: {
      entries: [], // Disable all pre-rendering
    },
  },
};

export default config;
