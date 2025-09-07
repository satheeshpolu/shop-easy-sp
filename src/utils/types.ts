export interface Product {
  id: number;
  name: string;
  isFavorite?: boolean;
  [key: string]: any;
}
