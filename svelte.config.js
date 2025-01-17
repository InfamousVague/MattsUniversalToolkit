import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-static"
import path from "node:path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess({})],
    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
        // vite: {
        //   resolve: {
        //     alias: {
        //       $lib: path.resolve('src/lib')
        //     }
        //   }
        // }
    },
}

export default config
