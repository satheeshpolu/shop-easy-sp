import fetchProductById from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (id: number) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    enabled: !!id,
  });
// import { useQuery } from "@tanstack/react-query";

// const useProduct = (id: number) => {
//   return useQuery({
//     queryKey: ["product", id],
//     queryFn: async () => {
//       const res = await fetch(`https://dummyjson.com/products/${id}`);
//       if (!res.ok) {
//         throw new Error(`Failed to fetch ${id} product`);
//       }
//       return res.json();
//     },
//     staleTime: 1000 * 60 * 5,
//     gcTime: 1000 * 60 * 30,
//   });
// };

// export default useProduct;
