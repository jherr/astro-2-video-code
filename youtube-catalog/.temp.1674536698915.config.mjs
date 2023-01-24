import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import preact from "@astrojs/preact";

export default defineConfig({
  integrations: [
    mdx(),
    node({
      mode: "standalone",
    }),
    preact(),
    tailwind(),
  ],
  output: "server",
});
