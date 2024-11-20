import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-static"
import path from "node:path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess({})],
    kit: {
        paths: {
            base: '/UplinkWeb/build'
        },
        // Static adapter for GitHub Pages
        adapter: adapter({
            fallback: '404.html'
        }),
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
