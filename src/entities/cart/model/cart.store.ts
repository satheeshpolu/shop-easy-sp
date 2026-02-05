import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartState } from './cart.types';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        }),

      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),

      updateQuantity: (itemId, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((item) => item.id !== itemId)
              : state.items.map((item) =>
                  item.id === itemId ? { ...item, quantity } : item
                ),
        })),

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => {
          const price = item.discountPercentage
            ? item.price * (1 - item.discountPercentage / 100)
            : item.price;
          return total + price * item.quantity;
        }, 0);
      },

      getItemCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
