import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";
import path from "node:path";

const config = {
  preprocess: [vitePreprocess({})],
  kit: {
    paths: {
      base: '/UplinkWeb', // Ensure this matches your deployment path on GitHub Pages
    },
    adapter: adapter({
      fallback: '404.html', // Fallback for unmatched routes (needed for GitHub Pages)
    }),
    appDir: 'build/_app', // Custom app directory to control build structure
    prerender: {
      entries: [
        '/', 
        '/chat', 
        '/community/chat', 
        '/developer/debug/voice',
        '/files', 
        '/friends', 
        '/pre', 
        '/settings/about', 
        '/settings/accessibility', 
        '/settings/audio_video', 
        '/settings/developer', 
        '/settings/extensions', 
        '/settings/gamepad', 
        '/settings/inventory', 
        '/settings/keybinds', 
        '/settings/licenses', 
        '/settings/messages', 
        '/settings/network', 
        '/settings/notifications', 
        '/settings/preferences', 
        '/settings/profile', 
        '/settings/realms', 
        '/wallet'
      ], // Explicitly list prerenderable routes
    },
  },
};

export default config;
