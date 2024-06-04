import { Ionicons } from '@expo/vector-icons';
import { Button } from '@gluestack-ui/themed';
import { router, Stack } from 'expo-router';

import { Routes } from '@/configs';

const closeModalSignInEmailButton = () => {
  return (
    <Button variant="link" $active-opacity={0.6} onPress={() => router.back()}>
      <Ionicons name="close" size={24} />
    </Button>
  );
};

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.auth.home.name} />

      <Stack.Screen
        name={Routes.auth.signInEmail.name}
        options={{
          presentation: 'modal',
          headerShown: true,
          title: Routes.auth.signInEmail.title,
          headerRight: closeModalSignInEmailButton,
        }}
      />
    </Stack>
  );
}
