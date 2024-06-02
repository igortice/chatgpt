import { Slot } from 'expo-router';

import { AuthProvider, RootAppProvider } from '@/providers';

export default function RootAppLayout() {
  return (
    <RootAppProvider>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </RootAppProvider>
  );
}
