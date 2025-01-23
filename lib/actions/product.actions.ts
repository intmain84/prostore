'use server';
import { prisma } from '@/db/prisma';
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';
import { Product } from '@/types';

//Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return data;
}

//Get product
export const getProductBySlug = async (
  slug: string,
): Promise<Product | null> => {
  const data = await prisma.product.findUnique({
    where: { slug },
  });
  return data;
};
