// Re-export from features layer for backward compatibility
// The new recent products store is in @/features/recent-products
export { useRecentProductsStore as useRecentStore } from '@/features/recent-products';

// Keep the original export for backward compatibility
import { useRecentProductsStore } from '@/features/recent-products';
export { useRecentProductsStore };
