import { Stack } from 'expo-router';

import { Routes } from '@/configs';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.auth.home.name} />

      <Stack.Screen name={Routes.auth.signInEmail.name} options={{ presentation: 'modal' }} />
    </Stack>
  );
}
