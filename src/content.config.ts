import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const clientStories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/client-stories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    challenge: z.string(),
    solution: z.string(),
    resultMetric: z.string(),
    pubDate: z.coerce.date(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .length(3),
  }),
});

export const collections = { clientStories };
