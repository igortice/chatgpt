import { Drawer } from 'expo-router/drawer';

import { Routes } from '@/configs';
import { DrawerProvider } from '@/providers';

const chatName = Routes.app.drawer.chat.name;
const dalleName = Routes.app.drawer.dalle.name;

export default function AppDrawerLayout() {
  return (
    <DrawerProvider>
      <Drawer>
        <Drawer.Screen name={chatName} />

        <Drawer.Screen name={dalleName} />
      </Drawer>
    </DrawerProvider>
  );
}
