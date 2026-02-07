import useShareProduct from '@/hooks/useShareProduct';
import useProductStore from '@/stores/useProductStore';
import { Product } from '@/utils/types';
import { Text } from '@chakra-ui/react';
import { Box, Image, Heading, VStack, Stack } from '@chakra-ui/react';
import { FaShare } from 'react-icons/fa';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

import { ProductCardFooter } from './shared/product/ProductCardFooter';

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { shareProduct } = useShareProduct();
  const { toggleFavorite } = useProductStore();

  return (
    <>
      {/* <ProductCardHeader product={product} /> */}
      <Box
        onClick={() => {
          toggleFavorite(product.id);
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
      <Image
        src={product?.thumbnail}
        alt={product?.title}
        objectFit="scale-down"
        w="100%"
        h="200px"
        _hover={{
          transform: 'scale(1.3)',
          transition: '0.5s',
          zIndex: -1,
        }}
      />

      <Box p={4}>
        <VStack>
          <Heading fontSize="lg">{product.title}</Heading>
          <Text fontSize="sm" color="gray.600">
            {product.description}
          </Text>
          <Stack direction="row" align="center" justify="space-between" w="full">
            <ProductCardFooter product={product} />
          </Stack>
        </VStack>
      </Box>
    </>
  );
};

export default ProductCard;
