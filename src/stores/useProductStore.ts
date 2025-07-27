import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  name: string;
  isFavorite?: boolean;
  [key: string]: any;
}

interface ProductStore {
  products: Product[];
  favoriteProducts: Product[];
  fetchProducts: (category: string) => Promise<void>;
  toggleFavorite: (productId: number, pageType?: string) => void;
}

const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: [],
      favoriteProducts: [],

      fetchProducts: async (category: string) => {
        try {
          const res = await fetch(`https://dummyjson.com/products/category/${category}`);
          const data = await res.json();

          const favoriteIds = get().favoriteProducts.map((f) => f.id);

          const initializedProducts = data.products.map((product: Product) => ({
            ...product,
            isFavorite: favoriteIds.includes(product.id),
          }));

          set({ products: initializedProducts });
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      },

      toggleFavorite: (productId, pageType) => {
        const { favoriteProducts, products } = get();
        const dataCollectoin = pageType === 'favorite' ? favoriteProducts : products;
        const productToToggle = dataCollectoin.find((p) => p.id === productId); // TODO
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
    }),
    {
      name: "favorite-products", // LocalStorage key
      partialize: (state) => ({ favoriteProducts: state.favoriteProducts }), // Only persist favorites
    }
  )
);

export default useProductStore;
