import { Stack } from 'expo-router';
import { ScreenProps } from 'expo-router/build/useScreens';

import { Routes } from '@/configs';
import { optionsStackScreenModalHeaderClose } from '@/utils';

const homeName = Routes.auth.home.name;
const signInEmailName = Routes.auth.signInEmail.name;
const signInEmailTitle = Routes.auth.signInEmail.title;

const customSignInEmailScreenProps = {
  name: signInEmailName,
  options: {
    ...optionsStackScreenModalHeaderClose({ title: signInEmailTitle }),
  },
} as ScreenProps;

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={homeName} />

      <Stack.Screen {...customSignInEmailScreenProps} />
    </Stack>
  );
}
