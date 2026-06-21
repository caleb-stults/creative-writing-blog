import { defineConfig } from "astro/config";
import { CONFIG } from "./src/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import react from "@astrojs/react";

export default defineConfig({
  base: "/",
  site: 'https://blog.hoss-movies.com',
  output: 'static',
  integrations: [
    sitemap(),
    mdx(),
    tailwind(),
    playformCompress(),
    react(),
  ],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
    },
  },
  vite: {
    define: {
      'process.env.KEYSTATIC_GITHUB_CLIENT_ID': JSON.stringify('Iv23liMsuCbP309VxgMe'),
    },
    ssr: {
      external: ['svgo'],
    },
  },
});