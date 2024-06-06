import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Box } from '@gluestack-ui/themed';
import { Drawer } from 'expo-router/drawer';

import { Routes } from '@/configs';
import { DrawerProvider } from '@/providers';
import { customAppDrawerLayoutProps } from '@/utils';

const chatName = Routes.app.drawer.chat.name;
const dalleName = Routes.app.drawer.dalle.name;

export default function AppDrawerLayout() {
  return (
    <DrawerProvider>
      <Drawer {...customAppDrawerLayoutProps}>
        <Drawer.Screen
          name={chatName}
          options={{
            title: 'ChatGPT',
            drawerIcon: ({ color }) => (
              <Box ml={10}>
                <FontAwesome6 name="font-awesome-logo-full" size={24} color={color} />
              </Box>
            ),
          }}
        />

        <Drawer.Screen
          name={dalleName}
          options={{
            title: 'Dalle',
            drawerIcon: ({ color }) => (
              <Box ml={10}>
                <Ionicons name="color-filter" size={24} color={color} />
              </Box>
            ),
          }}
        />
      </Drawer>
    </DrawerProvider>
  );
}
