import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, ProductStore } from "./types";

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
      sortProducts: (type: string) => {
        const { products } = get();
        const _sortBy = type === 'price' ? 'price' : 'title';
        let sortedProducts: Product[] = [];
        // a[_sortBy].localeCompare(b[_sortBy]));
        // const sortedProducts = products.sort((a,b) => a[_sortBy].localeCompare(b[_sortBy]));
        if(_sortBy === 'price') {
          sortedProducts = products.sort((a,b) => a[_sortBy] - b[_sortBy]);
        } else {  
          sortedProducts = products.sort((a,b) => a[_sortBy].localeCompare(b[_sortBy]));
        }
        debugger
        set({
          products: sortedProducts,
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
