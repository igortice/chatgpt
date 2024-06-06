import { Stack } from 'expo-router';

import { Routes } from '@/configs';
import { optionsStackScreenModalHeaderClose } from '@/utils';

const drawerName = '(drawer)';
const configName = Routes.app.config.name;
const configTitle = Routes.app.config.title;

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={drawerName} />

      <Stack.Screen
        name={configName}
        options={{ ...(optionsStackScreenModalHeaderClose({ title: configTitle }) as any) }}
      />
    </Stack>
  );
}
