// Re-export from entities layer for backward compatibility
// The new cart store is in @/entities/cart
export { useCartStore } from '@/entities/cart';

// Keep as default export for backward compatibility
import { useCartStore as useCartStoreNew } from '@/entities/cart';
export default useCartStoreNew;
