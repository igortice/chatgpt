import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Center, Text } from '@gluestack-ui/themed';
import { Drawer } from 'expo-router/drawer';
import * as DropdownMenu from 'zeego/dropdown-menu';

import { Colors } from '@/configs';

const items = [
  {
    id: '1',
    title: 'ChatGPT-3.5',
  },
  {
    id: '2',
    title: 'ChatGPT‑4o',
  },
  {
    id: '3',
    title: 'Plus(GPT-4, GPT‑4o e GPT-3.5)',
  },
];

const CustomHeaderRight = () => {
  return (
    <Button variant="link" $active-opacity={0.6} onPress={() => console.log('new chat')}>
      <Ionicons name="create-outline" size={24} />
    </Button>
  );
};

const CustomTitle = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Center py={6} px={14} borderRadius="$xl" bg={Colors.input} flexDirection="row">
          <Text size="sm" fontWeight="$medium" color={Colors.blue} mr={4}>
            ChatGPT
          </Text>

          <MaterialCommunityIcons name="star-four-points" size={16} color={Colors.blue} />
        </Center>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Label>Selecione o modelo</DropdownMenu.Label>

        {items.map(item => (
          <DropdownMenu.Item key={item.id} textValue={item.title}>
            <DropdownMenu.ItemTitle>
              <Text>{item.title}</Text>
            </DropdownMenu.ItemTitle>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
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
