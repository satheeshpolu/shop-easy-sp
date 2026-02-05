import { Button, IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { Product } from '@/entities/product';
import { useAddToCart } from '../model';
import { useIsInCart } from '@/entities/cart';

interface AddToCartButtonProps {
  product: Product;
  variant?: 'button' | 'icon';
}

export function AddToCartButton({
  product,
  variant = 'button',
}: AddToCartButtonProps) {
  const { addToCart } = useAddToCart();
  const isInCart = useIsInCart(product.id);

  if (variant === 'icon') {
    return (
      <IconButton
        aria-label="Add to cart"
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        colorPalette={isInCart ? 'green' : 'teal'}
        size="sm"
      >
        <FaShoppingCart />
      </IconButton>
    );
  }

  return (
    <Button
      colorPalette={isInCart ? 'green' : 'teal'}
      onClick={(e) => {
        e.stopPropagation();
        addToCart(product);
      }}
    >
      <FaShoppingCart />
      {isInCart ? 'In Cart' : 'Add to Cart'}
    </Button>
  );
}
