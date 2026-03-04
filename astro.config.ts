// @ts-check
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://hi.ttio.cc",

  integrations: [svelte()],

  vite: {
    plugins: [tailwindcss()]
  }
});
