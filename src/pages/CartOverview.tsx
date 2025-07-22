import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import useCartStore from "../stores/useCartStore";
import { Table, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import ZoomingCart from "@/components/ZoomingCart";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  availabilityStatus: string;
  minimumOrderQuantity: number;
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  weight: number;
  sku: string;
  tags: string[];
  images: string[];
  thumbnail: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  meta: {
    createdAt: string; // ISO date string
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  reviews: Array<Record<string, any>>; // You can replace with a proper Review interface if needed
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface MetaData {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  availabilityStatus: string;
  minimumOrderQuantity: number;
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  weight: number;
  sku: string;
  tags: string[];
  images: string[];
  thumbnail: string;
  dimensions: Dimensions;
  meta: MetaData;
}

const CartOverview = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const cart = useCartStore((state: { cart: any }) => state.cart);
  useEffect(() => {
    cart.length ? setIsCartEmpty(false) : setIsCartEmpty(true);
  }, [cart]);
  const removeFromCart = useCartStore(
    (state: { removeFromCart: any }) => state.removeFromCart
  );
  const clearCart = useCartStore(
    (state: { clearCart: any }) => state.clearCart
  );
  const navigate = useNavigate();
  console.log("CartOverview => ", cart.length);
  // const [amount, setAmount] = useState(0);
  // Calculate totals
  const totalQuantity = cart.reduce(
    (acc: number, item: Product) => acc + item.price,
    0
  );
  const totalAmount = cart.reduce(
    (acc: number, item: Product) => acc + item.price,
    0
  );
  // const totalDiscounted = cart.reduce(
  //   (acc: number, item: Product) => acc + item.discountPercentage,
  //   0
  // );

  return (
    <>
      <Flex justify="flex-end" mt={4} mr={4} gap={8}>
        <Button
          onClick={() => navigate("/")}
          colorScheme="teal"
          variant="outline"
        >
          ← Back
        </Button>
        {!isCartEmpty && (
          <>
            <Button
              variant="outline"
              bg="#14b8a6"
              color="#c9f9f4"
              _hover={{ bg: "teal.600" }}
              onClick={() => {
                clearCart();
                navigate("/");
              }}
            >
              Clear Cart
            </Button>
            <Button
              variant="outline"
              bg="#14b8a6"
              color="#c9f9f4"
              _hover={{ bg: "teal.600" }}
              onClick={() =>
                navigate("/cart/checkout", {
                  state: {
                    user: "Test User",
                    amount: totalAmount,
                  },
                })
              }
            >
              Check Out
            </Button>
          </>
        )}
      </Flex>
      <Flex style={{ margin: "30px" }}>
        {isCartEmpty && (
          <Box
            flex={1}
            // bg="gray.100"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRightRadius={{ md: "80px" }}
          >
            <VStack textAlign="center" px={4}>
              <Heading fontSize={{ base: "3xl", md: "4xl" }}>
                {"Cart is empty"}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} maxW="md">
                {"- Please add items"}
              </Text>
              <ZoomingCart />
            </VStack>
          </Box>
        )}
        {!isCartEmpty && (
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Product</Table.ColumnHeader>
                <Table.ColumnHeader>Title</Table.ColumnHeader>
                <Table.ColumnHeader>Quantity</Table.ColumnHeader>
                <Table.ColumnHeader>Total</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">
                  Discounted Total
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {cart.map((item: Product) => (
                <Table.Row key={item.id}>
                  <Table.Cell>
                    <HStack>
                      <Image
                        src={item?.thumbnail}
                        alt={item?.title}
                        w="100px"
                        h="100px"
                        onClick={() =>
                          navigate(
                            `/category/${item.category}/${item.id}/product_details`,
                            {
                              state: { data: item },
                            }
                          )
                        }
                        cursor={"pointer"}
                      />
                      <Button
                        variant="outline"
                        fontSize={8}
                        color="red"
                        onClick={() => {
                          if (
                            window.confirm("Are you sure you want to delete?")
                          ) {
                            removeFromCart(item.id);
                          }
                        }}
                      >
                        <FaTrash />
                      </Button>
                      <Button
                        variant={"outline"}
                        fontSize={16}
                        color={"green"}
                        onClick={() => window.alert("It's under development.")}
                      >
                        <FaPlus />
                      </Button>
                    </HStack>
                  </Table.Cell>
                  <Table.Cell>{item.title}</Table.Cell>
                  <Table.Cell>{item.category}</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell textAlign="end">{item.price}</Table.Cell>
                </Table.Row>
              ))}
              <Table.Row fontWeight="bold" bg="gray.100">
                <Table.Cell>Total</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>${totalQuantity.toFixed(2)}</Table.Cell>
                <Table.Cell textAlign="end">
                  ${totalAmount.toFixed(2)}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        )}
      </Flex>
    </>
  );
};

export default CartOverview;
