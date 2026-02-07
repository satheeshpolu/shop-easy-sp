// Re-export types from entities layer for backward compatibility
export type { Product } from '@/entities/product';
export type { CartItem, CartState } from '@/entities/cart';

// Legacy types - kept for backward compatibility
import { Product } from '@/entities/product';

interface RecentStore {
  recents: Product[];
  addToRecent: (product: Product) => void;
  recentProducts: () => Product[];
}

interface ProductStore {
  products: Product[];
  favoriteProducts: Product[];
  fetchProducts: (category: string) => Promise<void>;
  toggleFavorite: (productId: number, pageType?: string) => void;
  sortProducts: (type: string) => void;
}

export type { RecentStore, ProductStore };
