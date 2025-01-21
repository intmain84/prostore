import { z } from 'zod';
import { formatNumberWithDecimal } from '@/lib/utils';

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Price must have exactly two decimal places',
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  category: z.string().min(3, 'Slug must be at least 3 characters'),
  brand: z.string().min(3, 'Slug must be at least 3 characters'),
  description: z.string().min(3, 'Slug must be at least 3 characters'),
  images: z.array(z.string()).min(1, 'Product must have at least 1 image'),
  stock: z.coerce.number(),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
