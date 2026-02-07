export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  discountPercentage?: number;
  category?: string;
}

export interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}
