import { Stack } from 'expo-router';

const drawerName = '(drawer)';

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={drawerName} />
    </Stack>
  );
}
