import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";
import path from "node:path";

const config = {
  preprocess: [vitePreprocess({})], 
  kit: {
    paths: {
      base: '/UplinkWeb', 
    },
    adapter: adapter({
      fallback: '404.html', 
    }),
    appDir: 'build/_app',
  },
};

export default config;
