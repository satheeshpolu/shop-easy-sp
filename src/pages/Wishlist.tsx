import {
  Box,
  Grid,
  Image,
  Text,
  Heading,
  VStack,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { lazy, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCartStore from "../stores/useCartStore";
import useProductStore from "@/stores/useProductStore";
import { BackButton, ProductCardHeader } from "@/components/shared";
import { ProductCardFooter } from "@/components/shared/product/ProductCardFooter";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { EmptyState } from "@/components/shared/empty/EmptyState";

export default function Wishlist() {
  const { category } = useParams();
  // console.log("category => ", category);
  // const navigate = useNavigate();
  // const addToCart = useCartStore(
  //   (state: { addToCart: any }) => state.addToCart,
  // );

  const borderColor = "gray.700";
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const { t } = useTranslation();
  const { fetchProducts, toggleFavorite, favoriteProducts } = useProductStore();
  useEffect(() => {
    setLoading(false);
    fetchProducts(category as string);
    if (favoriteProducts.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [favoriteProducts]);

  return (
    <Box p={6}>
      <Flex justify="flex-end" mt={4} mr={4} gap={8}>
        <BackButton />
      </Flex>

      <Heading size="lg" mb={6}>
        {favoriteProducts ? t("contact.title") : `Category: {category}`}
      </Heading>

      {isEmpty && <EmptyState type={"wishlist"} />}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {favoriteProducts.map((product: any) => (
          <Box
            key={product?.id}
            borderRadius="lg"
            overflow="hidden"
            bg="#8ef1e4"
            borderColor={borderColor}
            shadow="md"
            _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
          >
            <ProductCardHeader product={product} />
            <Image
              src={product?.thumbnail}
              alt={product?.title}
              objectFit="scale-down"
              w="100%"
              h="120px"
              _hover={{
                transform: "scale(1.5)",
                transition: "0.5s",
                zIndex: -1,
              }}
            />

            <Box p={4}>
              <VStack>
                <Heading fontSize="lg">{product.title}</Heading>

                <Text fontSize="sm" color="gray.600">
                  {product.description}
                </Text>

                <Stack
                  direction="row"
                  align="center"
                  justify="space-between"
                  w="full"
                >
                  <ProductCardFooter product={product} />
                </Stack>
              </VStack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
