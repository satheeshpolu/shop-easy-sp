// Legacy API file - re-exports from entities layer for backward compatibility
import { productApi } from '@/entities/product';
import { Product } from '@/entities/product';

export const fetchProductById = (id: number) => {
  return productApi.getById(id);
};

export type { Product };
