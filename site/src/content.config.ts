import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.object({ th: z.string(), en: z.string() });

const products = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      no: z.number(),
      slug: z.string(),
      name: text,
      line: z.enum(['knit', 'craft']),
      type: z.enum(['hat', 'shoulder-bag', 'phone-bag', 'coaster', 'tee', 'handbag', 'purse', 'other']),
      priceFrom: z.number(),
      materials: z.array(z.string()),
      technique: text,
      hours: z.number(),
      size: z.string(),
      colours: z.array(z.string()),
      status: z.enum(['ready', 'made-to-order', 'coming-soon']),
      featured: z.boolean().default(false),
      images: z.array(image()).min(1),
      story: text,
      added: z.string(),
      dummy: z.boolean().default(false),
    }),
});

export const collections = { products };
