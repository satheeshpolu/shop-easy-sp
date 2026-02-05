import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      p={4}
    >
      <VStack gap={4} textAlign="center">
        <Heading size="lg" color="red.500">
          Oops! Something went wrong
        </Heading>
        <Text color="gray.600" maxW="md">
          {error.message || 'An unexpected error occurred'}
        </Text>
        <Button colorPalette="teal" onClick={resetErrorBoundary}>
          Try Again
        </Button>
      </VStack>
    </Box>
  );
}
