// Product entity types

export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  availabilityStatus: string;
  minimumOrderQuantity: number;
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  weight: number;
  sku: string;
  tags: string[];
  thumbnail: string;
  dimensions: ProductDimensions;
  meta: ProductMeta;
  images?: string[];
  brand?: string;
  reviews: ProductReview[];
  // UI state (optional)
  isFavorite?: boolean;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductFilters {
  category?: string;
  search?: string;
  sortBy?: 'price' | 'title' | 'rating';
  sortOrder?: 'asc' | 'desc';
}
