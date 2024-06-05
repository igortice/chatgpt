import { Entypo, FontAwesome6, Ionicons } from '@expo/vector-icons';
import {
  Avatar,
  AvatarFallbackText,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from '@gluestack-ui/themed';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors, Routes } from '@/configs';
import { DrawerProvider } from '@/providers';

const chatName = Routes.app.drawer.chat.name;
const dalleName = Routes.app.drawer.dalle.name;

const CustomHeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <Button
      marginLeft={12}
      variant="link"
      $active-opacity={0.6}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      <FontAwesome6 name="grip-lines" size={24} color="black" />
    </Button>
  );
};

const CustomDrawerContent = (props: any) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <Box h="$full">
      <Box mt={top} mx={16} mb={10}>
        <Input rounded="$xl" bg={Colors.input} borderWidth={0} px={10}>
          <InputSlot>
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField placeholder="Search" />
        </Input>
      </Box>

      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Box
        pt={12}
        px={16}
        pb={bottom}
        position="absolute"
        backgroundColor={`${Colors.input}20`}
        bottom={0}
        left={0}
        right={0}>
        <HStack>
          <Box w="85%">
            <HStack space="md">
              <Avatar bgColor={Colors.orange} size="md" borderRadius="$lg">
                <AvatarFallbackText>Igor Rocha</AvatarFallbackText>
              </Avatar>
              <Center>
                <Heading size="xs">Igor Rocha</Heading>
              </Center>
            </HStack>
          </Box>
          <Box w="15%" justifyContent="center" alignItems="flex-end">
            <Button variant="link" $active-opacity={0.6}>
              <Entypo name="dots-three-horizontal" size={20} color={Colors.greyLight} />
            </Button>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default function AppDrawerLayout() {
  return (
    <DrawerProvider>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerStyle: {
            width: '85%',
          },
          headerStyle: {
            backgroundColor: Colors.transparent,
          },
          headerShadowVisible: false,
          drawerActiveBackgroundColor: Colors.selected,
          drawerActiveTintColor: Colors.black,
          drawerInactiveTintColor: Colors.black,
          drawerItemStyle: {
            borderRadius: 12,
          },
          drawerLabelStyle: {
            marginLeft: -12,
          },
          headerLeft: () => <CustomHeaderLeft />,
        }}>
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
