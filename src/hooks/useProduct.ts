import { useQuery } from "@tanstack/react-query";

const useProduct = (id: number) => {
   return useQuery({
      queryKey: ["product", id],
      queryFn: () => {
         console.log('***');
         return fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json());
      },
      staleTime: 1000 * 60 * 5,
      // cacheTime: 1000 * 60 * 30
   });
};

export default useProduct;