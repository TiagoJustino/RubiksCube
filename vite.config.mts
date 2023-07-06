import { defineConfig } from 'npm:vite@^4.3.9'
import { svelte } from 'npm:@sveltejs/vite-plugin-svelte@^2.4.2'

import 'npm:svelte@^3.59.2'
// @deno-types="npm:@types/three"
import 'npm:three@^0.153.0'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()]
})
