import { defineConfig } from 'npm:vite@^4.4.4'
import { svelte } from 'npm:@sveltejs/vite-plugin-svelte@^2.4.2'

import 'npm:svelte@^4.0.5'
// @deno-types="npm:@types/three"
import 'npm:three@^0.154.0'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()]
})
