import { defineConfig } from "astro/config";
import { CONFIG } from "./src/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

export default defineConfig({
  base: "/",
  site: 'https://blog.hoss-movies.com',
  output: 'static',
  integrations: [
    sitemap(),
    mdx(),
    tailwind(),
    playformCompress(),
  ],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
    },
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});