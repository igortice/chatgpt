import { Ionicons } from '@expo/vector-icons';
import { Button, Center, Text } from '@gluestack-ui/themed';
import { Drawer } from 'expo-router/drawer';

import { HeaderDropDown } from '@/components';

const items = [
  {
    id: '1',
    title: 'share',
    icon: 'square.and.arrow.up',
  },
  {
    id: '2',
    title: 'delete',
    icon: 'trash',
  },
];

const CustomHeaderRight = () => {
  return (
    <Button variant="link" $active-opacity={0.6} onPress={() => console.log('new chat')}>
      <Ionicons name="create-outline" size={24} />
    </Button>
  );
};

export default function AppChat() {
  return (
    <Center h="$full">
      <Drawer.Screen
        options={{
          headerTitle: () => (
            <HeaderDropDown
              title="ChatGPT"
              titleIcon="star-four-points"
              items={items}
              onSelected={id => console.log(id)}
            />
          ),
          headerRight: () => <CustomHeaderRight />,
        }}
      />
      <Text>AppChat</Text>
    </Center>
  );
}
