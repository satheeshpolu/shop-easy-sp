// Derived product data selectors

import { Product } from './product.types';

export const getDiscountedPrice = (product: Product): number => {
  return product.price * (1 - product.discountPercentage / 100);
};

export const getFormattedPrice = (price: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
};

export const isInStock = (product: Product): boolean => {
  return product.stock > 0;
};

export const sortProducts = (
  products: Product[],
  sortBy: 'price' | 'title' | 'rating',
  order: 'asc' | 'desc' = 'asc'
): Product[] => {
  const sorted = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    }
    if (sortBy === 'rating') {
      return a.rating - b.rating;
    }
    return a.title.localeCompare(b.title);
  });

  return order === 'desc' ? sorted.reverse() : sorted;
};
