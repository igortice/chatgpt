import { Stack } from 'expo-router';
import { ScreenProps } from 'expo-router/build/useScreens';

import { Routes } from '@/configs';
import { optionsStackScreenModalHeaderClose } from '@/utils';

const drawerName = '(drawer)';
const configName = Routes.app.config.name;
const configTitle = Routes.app.config.title;

const customConfigScreenProps = {
  name: configName,
  options: {
    ...optionsStackScreenModalHeaderClose({ title: configTitle }),
  },
} as ScreenProps;

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={drawerName} />

      <Stack.Screen {...customConfigScreenProps} />
    </Stack>
  );
}
