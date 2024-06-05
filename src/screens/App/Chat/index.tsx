import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Center, Text } from '@gluestack-ui/themed';
import { Drawer } from 'expo-router/drawer';

import { Colors } from '@/configs';

const CustomHeaderRight = () => {
  return (
    <Button
      marginRight={12}
      variant="link"
      $active-opacity={0.6}
      onPress={() => console.log('new chat')}>
      <Ionicons name="create-outline" size={24} color="black" />
    </Button>
  );
};

const CustomTitle = () => {
  return (
    <Center py={6} px={12} borderRadius="$xl" bg={Colors.input} flexDirection="row">
      <Text size="sm" fontWeight="$medium" color={Colors.blue} mr={4}>
        ChatGPT
      </Text>

      <MaterialCommunityIcons name="star-four-points" size={16} color={Colors.blue} />
    </Center>
  );
};

export default function AppChat() {
  return (
    <Center h="$full">
      <Drawer.Screen
        options={{
          headerTitle: () => <CustomTitle />,
          headerRight: () => <CustomHeaderRight />,
        }}
      />
      <Text>AppChat</Text>
    </Center>
  );
}
