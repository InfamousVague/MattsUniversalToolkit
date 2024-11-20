import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-static"
import path from "node:path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess({})],
    kit: {
        paths: {
            base: '/UplinkWeb'  // Replace with your GitHub repository name
        },
        // Static adapter for GitHub Pages
        adapter: adapter({
            // This ensures that client-side routing works properly on GitHub Pages
            fallback: '404.html'
        }),
        // Uncomment this section if you need to set custom alias for modules
        // vite: {
        //   resolve: {
        //     alias: {
        //       $lib: path.resolve('src/lib')
        //     }
        //   }
        // }
    }
}

export default config