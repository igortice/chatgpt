import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Box } from '@gluestack-ui/themed';
import { ScreenProps } from 'expo-router/build/useScreens';
import { Drawer } from 'expo-router/drawer';

import { Routes } from '@/configs';
import { DrawerProvider } from '@/providers';
import { customAppDrawerLayoutProps } from '@/utils';

const chatName = Routes.app.drawer.chat.name;
const dalleName = Routes.app.drawer.dalle.name;

const customChatScreenOptions = {
  title: 'ChatGPT',
  drawerIcon: ({ color }: any) => (
    <Box ml={10}>
      <FontAwesome6 name="font-awesome-logo-full" size={24} color={color} />
    </Box>
  ),
};

const customChatScreenProps = {
  name: chatName,
  options: {
    ...customChatScreenOptions,
  },
} as ScreenProps;

const customDaleScreenOptions = {
  title: 'Dalle',
  drawerIcon: ({ color }: any) => (
    <Box ml={10}>
      <Ionicons name="color-filter" size={24} color={color} />
    </Box>
  ),
};

const customDalleScreenProps = {
  name: dalleName,
  options: {
    ...customDaleScreenOptions,
  },
} as ScreenProps;

export default function AppDrawerLayout() {
  return (
    <DrawerProvider>
      <Drawer {...customAppDrawerLayoutProps}>
        <Drawer.Screen {...customChatScreenProps} />

        <Drawer.Screen {...customDalleScreenProps} />
      </Drawer>
    </DrawerProvider>
  );
}
