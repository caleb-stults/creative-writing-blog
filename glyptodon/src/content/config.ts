import { defineCollection, z } from "astro:content";
import { CONFIG } from "../config"; // Adjust path if needed based on theme structure

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  publicationDate: z.coerce.date(),
  public: z.boolean().default(true),
  author: z.string().default(CONFIG.author),
});

export const collections = {
  stories: defineCollection({ type: "content", schema: baseSchema }),
  poetry: defineCollection({ type: "content", schema: baseSchema }),
  misc: defineCollection({ type: "content", schema: baseSchema }),
  // Keep your theme's existing collections if required
};