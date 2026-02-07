import useShareProduct from '@/hooks/useShareProduct';
import useProductStore from '@/stores/useProductStore';
import { Product } from '@/utils/types';
import { Text } from '@chakra-ui/react';
import { Box, Image, Heading, VStack } from '@chakra-ui/react';
import { FaShare } from 'react-icons/fa';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { ProductCardFooter } from './shared/product/ProductCardFooter';
import { ProductCardHeader } from './shared/product/ProductCardHeader';

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { shareProduct } = useShareProduct();
  const { toggleFavorite } = useProductStore();

  return (
    <>
      <ProductCardHeader product={product} />
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
          <Heading fontSize="lg" whiteSpace="nowrap" overflow="hidden">
            {product.title}
          </Heading>

          <Box height={150}>
            <Text fontSize="sm" color="gray.600">
              {product.description}
            </Text>
          </Box>

          <ProductCardFooter product={product} />
        </VStack>
      </Box>
    </>
  );
};

export default ProductCard;
