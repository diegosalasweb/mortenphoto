import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title:    z.string(),
    excerpt:  z.string(),
    date:     z.coerce.date(),
    category: z.enum(['film', 'photography', 'travel', 'behind-the-scenes']),
    cover:    z.string(),
    coverAlt: z.string(),
    readTime: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
