import useShareProduct from '@/hooks/useShareProduct';
import useProductStore from '@/stores/useProductStore';
import { Product } from '@/utils/types';
import { Box } from '@chakra-ui/react';
import { FaHeart, FaRegHeart, FaShare } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
type HeaderProps = {
  product: Product;
};
const Header = ({ product }: HeaderProps) => {
  const { toggleFavorite } = useProductStore();
  const { shareProduct } = useShareProduct();
  const location = useLocation();
  const pathName = location.pathname === '/wishlist' ? 'wishlist' : '';
  console.log(location);
  return (
    <>
      <Box
        onClick={() => {
          toggleFavorite(product.id, pathName);
        }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        p={4}
        cursor={'pointer'}
      >
        {/* Share icon on the left */}
        <FaShare size={24} color="rgba(32, 134, 125, 1)" onClick={() => shareProduct(product)} />
        {product.isFavorite ? (
          <FaHeart size={30} color="rgba(202, 39, 39, 1)" />
        ) : (
          <FaRegHeart size={30} color="rgba(32, 134, 125, 1)" />
        )}
      </Box>
    </>
  );
};

export const ProductCardHeader = Header;
