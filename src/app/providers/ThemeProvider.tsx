import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ColorModeProvider } from '@/components/ui/color-mode';
import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
