import { IconButton } from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { Product } from '@/entities/product';
import { useWishlistStore } from '../model';

interface WishlistButtonProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg';
}

export function WishlistButton({ product, size = 'md' }: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const isFavorite = isInWishlist(product.id);

  const iconSize = size === 'sm' ? 20 : size === 'lg' ? 30 : 24;

  return (
    <IconButton
      aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
      onClick={(e) => {
        e.stopPropagation();
        toggleWishlist(product);
      }}
      variant="ghost"
      size={size}
    >
      {isFavorite ? (
        <FaHeart size={iconSize} color="rgba(202, 39, 39, 1)" />
      ) : (
        <FaRegHeart size={iconSize} color="rgba(32, 134, 125, 1)" />
      )}
    </IconButton>
  );
}
