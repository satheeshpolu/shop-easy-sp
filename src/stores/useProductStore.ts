import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, ProductStore } from './types';
import { productApi, sortProducts } from '@/entities/product';
import { env } from '@/app/config';

const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: [],
      favoriteProducts: [],

      fetchProducts: async (category: string) => {
        try {
          const response = await productApi.getByCategory(category);
          const data = response as unknown as { products: Product[] };
          
          const favoriteIds = get().favoriteProducts.map((f) => f.id);

          const initializedProducts = data.products.map((product: Product) => ({
            ...product,
            isFavorite: favoriteIds.includes(product.id),
          }));

          set({ products: initializedProducts });
        } catch (error) {
          console.error('Failed to fetch products:', error);
        }
      },

      toggleFavorite: (productId, pageType) => {
        const { favoriteProducts, products } = get();
        const dataCollection = pageType === 'wishlist' ? favoriteProducts : products;
        const productToToggle = dataCollection.find((p) => p.id === productId);
        if (!productToToggle) return;

        const isFavorite = favoriteProducts.some((f) => f.id === productId);

        const updatedFavorites = isFavorite
          ? favoriteProducts.filter((f) => f.id !== productId)
          : [...favoriteProducts, { ...productToToggle, isFavorite: true }];

        const updatedProducts = products.map((p) =>
          p.id === productId ? { ...p, isFavorite: !p.isFavorite } : p
        );

        set({
          favoriteProducts: updatedFavorites,
          products: updatedProducts,
        });
      },

      sortProducts: (type: string) => {
        const { products } = get();
        const sortBy = type === 'price' ? 'price' : 'title';
        const sortedProducts = sortProducts(products, sortBy, 'asc');
        set({
          products: sortedProducts,
        });
      },
    }),
    {
      name: 'favorite-products',
      partialize: (state) => ({ favoriteProducts: state.favoriteProducts }),
    }
  )
);

export default useProductStore;
