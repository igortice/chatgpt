import { Entypo, FontAwesome6 } from '@expo/vector-icons';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
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
import { Link, useNavigation } from 'expo-router';
import { ScreenProps } from 'expo-router/build/useScreens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors, Routes } from '@/configs';

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
      <Box mt={top} mx={12} mb={10}>
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
        px={12}
        pb={bottom}
        position="absolute"
        backgroundColor={`${Colors.input}20`}
        bottom={0}
        left={0}
        right={0}>
        <HStack>
          <Box w="85%">
            <HStack space="md">
              <Avatar bgColor={Colors.orange} size="md" borderRadius="$xl">
                <AvatarFallbackText>Igor Rocha</AvatarFallbackText>
                <AvatarImage
                  borderRadius={10}
                  source={{
                    uri: 'https://avatars.githubusercontent.com/u/1306646',
                  }}
                  alt="Igor Rocha"
                />
              </Avatar>
              <Center>
                <Heading size="xs">Igor Rocha</Heading>
              </Center>
            </HStack>
          </Box>
          <Box w="15%" justifyContent="center" alignItems="flex-end">
            <Link href={Routes.app.config.path} asChild>
              <Button variant="link" $active-opacity={0.6}>
                <Entypo name="dots-three-horizontal" size={20} color={Colors.greyLight} />
              </Button>
            </Link>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

const drawerScreenOptions = {
  drawerStyle: { width: '85%' },
  headerStyle: { backgroundColor: Colors.transparent },
  headerShadowVisible: false,
  headerRightContainerStyle: { paddingRight: 6 },
  drawerActiveBackgroundColor: Colors.selected,
  drawerActiveTintColor: Colors.black,
  drawerInactiveTintColor: Colors.black,
  drawerItemStyle: { borderRadius: 12 },
  drawerLabelStyle: { marginLeft: -12 },
  headerLeft: () => <CustomHeaderLeft />,
};

export const customAppDrawerLayoutProps = {
  drawerContent: CustomDrawerContent,
  screenOptions: { ...drawerScreenOptions } as any,
} as ScreenProps;
