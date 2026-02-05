import { Box, Image, Heading, VStack, Stack, Text } from '@chakra-ui/react';
import { Product } from '../../model';
import { getFormattedPrice, getDiscountedPrice } from '../../model';

interface ProductCardProps {
  product: Product;
  onShare?: () => void;
  onToggleFavorite?: () => void;
  onClick?: () => void;
  renderActions?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
}

export function ProductCard({
  product,
  onClick,
  renderActions,
  renderFooter,
}: ProductCardProps) {
  const discountedPrice = getDiscountedPrice(product);

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      shadow="sm"
      _hover={{ shadow: 'md' }}
      transition="box-shadow 0.2s"
      cursor={onClick ? 'pointer' : 'default'}
      onClick={onClick}
    >
      {renderActions?.()}

      <Image
        src={product.thumbnail}
        alt={product.title}
        objectFit="scale-down"
        w="100%"
        h="200px"
        _hover={{
          transform: 'scale(1.05)',
          transition: '0.3s',
        }}
      />

      <Box p={4}>
        <VStack align="stretch" gap={2}>
          <Heading fontSize="lg" lineClamp={1}>
            {product.title}
          </Heading>
          <Text fontSize="sm" color="gray.600" lineClamp={2}>
            {product.description}
          </Text>
          <Stack direction="row" align="center" justify="space-between">
            <Box>
              <Text fontWeight="bold" color="teal.600">
                {getFormattedPrice(discountedPrice)}
              </Text>
              {product.discountPercentage > 0 && (
                <Text
                  fontSize="sm"
                  textDecoration="line-through"
                  color="gray.400"
                >
                  {getFormattedPrice(product.price)}
                </Text>
              )}
            </Box>
            {renderFooter?.()}
          </Stack>
        </VStack>
      </Box>
    </Box>
  );
}
