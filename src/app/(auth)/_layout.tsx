import { Ionicons } from '@expo/vector-icons';
import { Button } from '@gluestack-ui/themed';
import { router, Stack } from 'expo-router';

import { Routes } from '@/configs';

const homeName = Routes.auth.home.name;
const signInEmailName = Routes.auth.signInEmail.name;
const signInEmailTitle = Routes.auth.signInEmail.title;

const headerRightModal = () => {
  return (
    <Button variant="link" $active-opacity={0.6} onPress={() => router.back()}>
      <Ionicons name="close" size={24} />
    </Button>
  );
};

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={homeName} />

      <Stack.Screen
        name={signInEmailName}
        options={{
          presentation: 'modal',
          headerShown: true,
          title: signInEmailTitle,
          headerRight: headerRightModal,
        }}
      />
    </Stack>
  );
}
