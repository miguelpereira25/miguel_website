import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    // Set both to list a piece published elsewhere; it links out
    // instead of rendering a local post page.
    externalUrl: z.string().url().optional(),
    publisher: z.string().optional(),
  }),
});

export const collections = { blog };
