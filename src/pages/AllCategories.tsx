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
import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSkeleton from "../components/LoadingSkeleton";
import useCartStore from "../stores/useCartStore";
import SimpleToast from "@/components/toast/SimpleToast";
import useProductStore from "@/stores/useProductStore";
import {
  FaCartPlus,
  FaHeart,
  FaRegHeart,
  FaShare,
  FaShareNodes,
  FaSlideshare,
} from "react-icons/fa6";
import React from "react";
import { Product } from "@/utils/types";
import { formatText } from "@/utils/helpers";

export default function AllCategory() {
  const { category } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore(
    (state: { addToCart: any }) => state.addToCart
  );
  // const cart = useCartStore((state: { cart: any }) => state.cart);
  const borderColor = "gray.700";
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { products, fetchProducts, toggleFavorite, favoriteProducts } =
    useProductStore();
  console.log("getFavorites => ", favoriteProducts.length);
  useEffect(() => {
    fetchProducts(category as string);
    setLoading(false);
  }, [category]);

  const LoadingSkeletonMemo = React.memo(() => {
    return <LoadingSkeleton />;
  });

  const handleBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const shareProduct = async (product: Product) => {
    debugger;
    const _url = `${window.location.href}/${product.id}/product_details`;
    const shareData = {
      title: product.name,
      text: `Check out this product: ${product.name}`,
      url: _url,
    };

    // Check if browser supports Web Share API
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Product shared successfully!");
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert(
        "Sharing is not supported in this browser. Please copy the URL manually."
      );
    }
  };

  return (
    <Box p={6}>
      <Flex justify="flex-end" mt={4} mr={4} gap={8}>
        <Button onClick={handleBackClick} colorScheme="teal" variant="outline">
          ← Back
        </Button>
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
        {loading && (
          <>
            <LoadingSkeletonMemo />
            <LoadingSkeletonMemo />
            <LoadingSkeletonMemo />
            <LoadingSkeletonMemo />
            <LoadingSkeletonMemo />
            <LoadingSkeletonMemo />
            <LoadingSkeletonMemo />
            <LoadingSkeletonMemo />
          </>
        )}
        {products.map((product: any) => (
          <Box
            key={product?.id}
            borderRadius="lg"
            overflow="hidden"
            bg="#8ef1e4"
            borderColor={borderColor}
            shadow="md"
            _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
          >
            <Box
              display="flex"
              justifyContent="space-between" // push icons to left & right
              alignItems="center"
              w="100%"
              p={4}
              cursor="pointer"
            >
              {/* Share icon on the left */}
              <FaShare
                size={24}
                color="rgba(32, 134, 125, 1)"
                onClick={() => shareProduct(product)}
              />

              {/* Favorite icon on the right */}
              {product.isFavorite ? (
                <FaHeart
                  size={30}
                  color="rgba(202, 39, 39, 1)"
                  onClick={() => toggleFavorite(product.id)}
                />
              ) : (
                <FaRegHeart
                  size={30}
                  color="rgba(32, 134, 125, 1)"
                  onClick={() => toggleFavorite(product.id)}
                />
              )}
            </Box>

            <Image
              src={product?.thumbnail}
              alt={product?.title}
              objectFit="cover"
              w="100%"
              h="200px"
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
                  <Text fontWeight="bold">${product.price}</Text>
                  <Button
                    type="submit"
                    alignSelf="flex-start"
                    variant="outline"
                    bg="#0f695f"
                    color="#c9f9f4"
                    onClick={() => {
                      navigate(
                        `/category/${category}/${product.id}/product_details`,
                        {
                          state: { data: product },
                        }
                      );
                    }}
                  >
                    Details
                  </Button>
                  {/* <SimpleToast
                    buttonText="Add to cart"
                    title={`Product ${product.title} is added to the cart`}
                    onClick={() => addToCart(product)}
                  /> */}
                  <Button
                    onClick={() => addToCart(product)}
                    colorScheme="teal"
                    variant="outline"
                  >
                    <FaCartPlus />
                  </Button>

                </Stack>
              </VStack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
