import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartState } from "./types";

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => {
          const exists = state.cart.find((i) => i.id === item.id);
          if (exists) {
            alert('Product is already added to the cart.');
            return state;
          }
          return { cart: [...state.cart, item] };
        }),

      removeFromCart: (itemId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== itemId),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
