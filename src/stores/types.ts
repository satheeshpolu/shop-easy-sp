import { Product } from "@/utils/types";

interface RecentStore {
    recents: Product[];
    addToRecent: (product: Product) => void;
    recentProducts: () => Product[];
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  [key: string]: any; // adjust based on your item structure
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}


interface ProductStore {
  products: Product[];
  favoriteProducts: Product[];
  fetchProducts: (category: string) => Promise<void>;
  toggleFavorite: (productId: number, pageType?: string) => void;
  sortProducts: (type: string) => void;
}

export type { RecentStore, CartItem, CartState, Product, ProductStore };