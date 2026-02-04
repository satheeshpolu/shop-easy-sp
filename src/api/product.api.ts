import { httpClient } from "@/shared/lib/http";
import { Product } from "@/utils/types";

export const fetchProductById = (id: number) => {
  return httpClient.get<Product>(`/products/${id}`);
};

// export const fetchProductById = (id: number) => {
//   return httpClient.get(`/products/${id}`);
// };