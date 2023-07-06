import { vitePreprocess } from "npm:@sveltejs/vite-plugin-svelte@^2.4.2";
import adapter from "npm:@sveltejs/adapter-static@^2.0.2";

const dev = Deno.args.includes("dev");

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? "" : Deno.env.get("BASE_PATH"),
    },
  },
};
