import useCartStore from "@/stores/useCartStore";
import {
  Box,
  Badge,
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState<any>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const { id } = useParams();
  const addToCart = useCartStore(
    (state: { addToCart: any }) => state.addToCart
  );
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.thumbnail || data.images?.[0]); // Default image
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return (
      <Box p={6} maxW="6xl" mx="auto">
        <Skeleton height="400px" />
      </Box>
    );
  }

  return (
    <Box
      p={{ base: 4, md: 8 }}
      maxW="6xl"
      mx="auto"
      bg="white"
      rounded="xl"
      boxShadow="lg"
    >
      <Button
        onClick={() => navigate("/")}
        colorScheme="teal"
        variant="outline"
      >
        ← Back
      </Button>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        {/* Images Section */}
        <VStack align="start">
          <Image
            src={mainImage}
            alt={product.title}
            borderRadius="md"
            w="100%"
            h="auto"
            objectFit="cover"
            transition="all 0.3s"
          />

          <HStack wrap="wrap">
            {product.images.slice(0, 5).map((img: string, idx: number) => (
              <Image
                key={idx}
                src={img}
                alt={`Product ${idx + 1}`}
                boxSize="75px"
                objectFit="cover"
                borderRadius="md"
                border={mainImage === img ? "2px solid teal" : "1px solid #eee"}
                cursor="pointer"
                onClick={() => setMainImage(img)}
                _hover={{ transform: "scale(1.05)" }}
              />
            ))}
          </HStack>
        </VStack>

        {/* Details Section */}
        <VStack align="start">
          <Heading size="lg">{product.title}</Heading>
          <Text color="gray.600" fontSize="md">
            <strong>Brand:</strong> {product.brand} | <strong>Category:</strong>{" "}
            {product.category}
          </Text>

          <HStack>
            <Text fontSize="2xl" fontWeight="bold" color="teal.600">
              ${product.price}
            </Text>
            <Badge colorScheme="green" fontSize="0.9em">
              -{product.discountPercentage}%
            </Badge>
          </HStack>

          <Text fontSize="md" color="gray.700">
            {product.description}
          </Text>

          <Badge
            colorScheme={
              product.availabilityStatus === "In Stock" ? "teal" : "red"
            }
            fontSize="0.9em"
          >
            {product.availabilityStatus}
          </Badge>

          <Stack fontSize="sm" color="gray.600">
            <Text>SKU: {product.sku}</Text>
            <Text>Stock: {product.stock}</Text>
            <Text>Min Order: {product.minimumOrderQuantity}</Text>
            <Text>Weight: {product.weight} kg</Text>
          </Stack>

          <Stack fontSize="sm" color="gray.600">
            <Text>Shipping: {product.shippingInformation}</Text>
            <Text>Warranty: {product.warrantyInformation}</Text>
            <Text>Return Policy: {product.returnPolicy}</Text>
          </Stack>

          <HStack>
            <Text>QR:</Text>
            <Image src={product.meta?.qrCode} alt="QR Code" boxSize="60px" />
          </HStack>

          <Button
            type="submit"
            alignSelf="flex-start"
            variant="outline"
            bg="#0f695f"
            color="#c9f9f4"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
