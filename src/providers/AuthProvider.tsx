import { useProtectRouteAuthProvider } from '@/hooks';

interface IAuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: IAuthProviderProps) {
  useProtectRouteAuthProvider();

  return children;
}
