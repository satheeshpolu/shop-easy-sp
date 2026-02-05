// Re-export from features layer for backward compatibility
export { useShareProduct } from '@/features/share-product';

// Keep as default export for backward compatibility
import { useShareProduct as useShareProductHook } from '@/features/share-product';
export default useShareProductHook;