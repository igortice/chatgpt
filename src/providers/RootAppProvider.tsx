import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import FlashMessage from 'react-native-flash-message';

interface IRootAppProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function RootAppProvider({ children }: IRootAppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <>{children}</>

      <StatusBar style="auto" />
      <FlashMessage position="top" duration={5000} />
    </QueryClientProvider>
  );
}
