import { httpClient } from "@/shared/lib/http";

export const fetchProductById = (id: number) => {
  return httpClient.get(`/products/${id}`);
};

// export const fetchProductById = (id: number) => {
//   return httpClient.get(`/products/${id}`);
// };