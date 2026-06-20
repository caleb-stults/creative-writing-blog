import { defineConfig } from "astro/config";
import { CONFIG } from "./src/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import playformCompress from "@playform/compress";

import keystatic from "@keystatic/astro";

export default defineConfig({
  base: "/",
  site: 'https://blog.hoss-movies.com',
  output: 'static',
  integrations: [
    sitemap(),
    mdx(),
    tailwind(),
    playformCompress(),
    keystatic(),
  ],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
    },
  },
  content: {
    collections: {
      posts: {
        schema: "src/content/config.ts#posts",
      },
      finds: {
        schema: "src/content/config.ts#finds",
      },
    },
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});