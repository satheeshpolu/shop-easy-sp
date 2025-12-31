import { Box, Grid, Heading, Flex } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import useProductStore from "@/stores/useProductStore";

import { formatText } from "@/utils/helpers";
import SortDropdown from "@/components/SortDropdown";
import { BackButton } from "@/components/shared";
import { Product } from "@/utils/types";
import ProductCard from "@/components/ProductCard";

export default function CategoryProducts() {
  const { category } = useParams();

  const { products, fetchProducts, sortProducts } = useProductStore();
  useEffect(() => {
    fetchProducts(category as string);
  }, [category]);
  const borderColor = "gray.700";

  return (
    <Box p={6}>
      <Flex justify="flex-end" mt={4} mr={4} gap={8}>
        <BackButton />
        <SortDropdown
          onFilterChange={(value) => {
            sortProducts(value);
          }}
        />
      </Flex>

      <Heading size="lg" mb={6}>
        Category: {formatText(category as string)}
      </Heading>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {products.map((product: Product) => (
          <Box
            key={product?.id}
            borderRadius="lg"
            overflow="hidden"
            bg="#8ef1e4"
            borderColor={borderColor}
            shadow="md"
            _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
