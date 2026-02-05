import { IconButton } from '@chakra-ui/react';
import { FaShare } from 'react-icons/fa';
import { Product } from '@/entities/product';
import { useShareProduct } from '../model';

interface ShareButtonProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg';
}

export function ShareButton({ product, size = 'md' }: ShareButtonProps) {
  const { shareProduct } = useShareProduct();

  return (
    <IconButton
      aria-label="Share product"
      onClick={(e) => {
        e.stopPropagation();
        shareProduct(product);
      }}
      variant="ghost"
      size={size}
    >
      <FaShare size={size === 'sm' ? 18 : 24} color="rgba(32, 134, 125, 1)" />
    </IconButton>
  );
}
