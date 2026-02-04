// export interface Product {
//   id: number;
//   name: string;
//   isFavorite?: boolean;
//   [key: string]: any;
// }

export interface Product {
  id: number;
  isFavorite?: boolean;
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

  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  meta: {
    createdAt: string; // ISO date string
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images?: string[];
  brand?: string;
  reviews: Array<Record<string, any>>; // You can replace with a proper Review interface if needed
}

// interface Dimensions {
//   width: number;
//   height: number;
//   depth: number;
// }

// interface MetaData {
//   createdAt: string;
//   updatedAt: string;
//   barcode: string;
//   qrCode: string;
// }

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   category: string;
//   availabilityStatus: string;
//   minimumOrderQuantity: number;
//   shippingInformation: string;
//   returnPolicy: string;
//   warrantyInformation: string;
//   weight: number;
//   sku: string;
//   tags: string[];
//   images: string[];
//   thumbnail: string;
//   dimensions: Dimensions;
//   meta: MetaData;
// }