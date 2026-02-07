import { useAddToCart } from "@/features/add-to-cart";
import useCartStore from "@/stores/useCartStore";
import { useRecentStore } from "@/stores/useRecentStore";
import { Product } from "@/utils/types";
import { Button, Text } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
type FooterComponentProps = {
  product: Product;
  //   category?: string | undefined;
};

const FooterComponent = ({ product }: FooterComponentProps) => {
  const { addToRecent } = useRecentStore(); 
  const navigate = useNavigate();
  const { addToCart } = useAddToCart();
  // const addToCart = useCartStore(
  //   (state: { addToCart: any }) => state.addToCart
  // );
  const { category } = useParams();
  return (
    <>
      <Text fontWeight="bold">${product.price}</Text>
      <Button
        type="submit"
        alignSelf="flex-start"
        variant="outline"
        bg="#0f695f"
        color="#c9f9f4"
        onClick={() => {
          addToRecent(product);
          navigate(`/category/${category}/${product.id}/product_details`, {
            state: { data: product },
          });
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
    </>
  );
};

export const ProductCardFooter = FooterComponent;
