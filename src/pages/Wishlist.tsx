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
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSkeleton from "../components/LoadingSkeleton";
import useCartStore from "../stores/useCartStore";
import SimpleToast from "@/components/toast/SimpleToast";
import useProductStore from "@/stores/useProductStore";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa6";

export default function Wishlist() {
  const { category } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore(
    (state: { addToCart: any }) => state.addToCart
  );
  const borderColor = "gray.700";
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
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
        <Button
          onClick={() => navigate(-1)}
          colorScheme="teal"
          variant="outline"
        >
          ← Back
        </Button>
      </Flex>

      <Heading size="lg" mb={6}>
        {favoriteProducts
          ? "Your Wishlist:"
          : `Category: {category}`}
      </Heading>
      {isEmpty && (
        <Flex justify="center" align="center" minH="60vh">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRightRadius={{ md: "80px" }}
            px={4}
            py={8}
            bg="#8ef1e4"
          >
            <VStack textAlign="center">
              <Heading fontSize={{ base: "3xl", md: "4xl" }}>
                You don't have any favorite product(s)
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} maxW="md">
                - Please add favorite product(s)
              </Text>
            </VStack>
          </Box>
        </Flex>
      )}
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
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </>
        )}

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
            <Box
              onClick={() => {
                debugger;
                toggleFavorite(product.id, "favorite");
              }}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              w="100%"
              p={4}
              cursor={'pointer'}
            >
              {product.isFavorite ? (
                <FaHeart size={30} color="rgba(202, 39, 39, 1)" />
              ) : (
                <FaRegHeart size={30} color="rgba(32, 134, 125, 1)" />
              )}
            </Box>
            <Image
              src={product?.thumbnail}
              alt={product?.title}
              objectFit="scale-down"
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
