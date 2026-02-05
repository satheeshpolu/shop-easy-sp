import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/entities/product';

const MAX_RECENT_ITEMS = 20;

interface RecentProductsState {
  items: Product[];
  addToRecent: (product: Product) => void;
  clearRecent: () => void;
}

export const useRecentProductsStore = create<RecentProductsState>()(
  persist(
    (set) => ({
      items: [],

      addToRecent: (product) =>
        set((state) => {
          // Remove if already exists
          const filtered = state.items.filter((p) => p.id !== product.id);
          // Add to front, limit to max
          const updated = [product, ...filtered].slice(0, MAX_RECENT_ITEMS);
          return { items: updated };
        }),

      clearRecent: () => set({ items: [] }),
    }),
    {
      name: 'recent-products-storage',
    }
  )
);
