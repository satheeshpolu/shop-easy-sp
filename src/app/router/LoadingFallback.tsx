import { Box, Flex } from '@chakra-ui/react';
import LoadingText from '@/components/LoadingText';
import { APP_CONSTANTS } from '../config';

export function LoadingFallback() {
  return (
    <Flex align="center" justify="center" h="100vh" position="relative">
      <Box
        w="500px"
        h="500px"
        position="absolute"
        transform="rotate(50deg)"
        bg="teal.200"
        borderRadius="35% 35% 35% 35% / 35% 35% 35% 35%"
        zIndex={-1}
        animation="spin 20s linear infinite"
      />
      <LoadingText title={APP_CONSTANTS.LOADING_TEXT} />
    </Flex>
  );
}
