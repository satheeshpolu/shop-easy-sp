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
export default function AllCategory() {
  const { category } = useParams();
  console.log("category =>", category);
  const navigate = useNavigate();
  const addToCart = useCartStore(
    (state: { addToCart: any }) => state.addToCart
  );
  // const cart = useCartStore((state: { cart: any }) => state.cart);
  const borderColor = "gray.700";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        setLoading(false);
      }); //setProducts(data)
  }, []);

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
        Category: {category}
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
                  <SimpleToast
                    buttonText="Add to cart"
                    title={`Product ${product.title} is added to the cart`}
                    onClick={() => addToCart(product)}
                  />
                </Stack>
              </VStack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
