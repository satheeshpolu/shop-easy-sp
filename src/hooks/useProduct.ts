// Re-export from entities layer for backward compatibility
export { useProduct } from '@/entities/product';

// Keep the old hook as default export for compatibility
import { useProduct as useProductQuery } from '@/entities/product';
export default useProductQuery;
