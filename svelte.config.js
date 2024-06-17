import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  vite: {
    server: {
      hmr: {
        clientPort: process.env.HMR_HOST ? 443 : 5173,
        host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : 'localhost'
      }
    }
  },
  preprocess: vitePreprocess(),
}
