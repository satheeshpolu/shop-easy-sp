import { fetchProductById } from './product.api';

// Re-export for backward compatibility
export default fetchProductById;
export { fetchProductById };

// Export new API from entities
export { productApi } from '@/entities/product';