import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/entities/product';

interface WishlistState {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  toggleWishlist: (product: Product) => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      addToWishlist: (product) =>
        set((state) => {
          if (state.items.some((p) => p.id === product.id)) {
            return state;
          }
          return { items: [...state.items, { ...product, isFavorite: true }] };
        }),

      removeFromWishlist: (productId) =>
        set((state) => ({
          items: state.items.filter((p) => p.id !== productId),
        })),

      isInWishlist: (productId) => {
        return get().items.some((p) => p.id === productId);
      },

      toggleWishlist: (product) => {
        const { isInWishlist, addToWishlist, removeFromWishlist } = get();
        if (isInWishlist(product.id)) {
          removeFromWishlist(product.id);
        } else {
          addToWishlist(product);
        }
      },
    }),
    {
      name: 'wishlist-storage',
    }
  )
);
