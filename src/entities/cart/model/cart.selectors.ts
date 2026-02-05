import { useCartStore } from './cart.store';

export const useCartItems = () => useCartStore((state) => state.items);
export const useCartTotal = () => useCartStore((state) => state.getTotal());
export const useCartItemCount = () => useCartStore((state) => state.getItemCount());
export const useIsInCart = (productId: number) =>
  useCartStore((state) => state.items.some((item) => item.id === productId));
