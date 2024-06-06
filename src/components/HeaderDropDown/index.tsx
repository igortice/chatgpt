import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Text } from '@gluestack-ui/themed';
import * as DropdownMenu from 'zeego/dropdown-menu';

import { Colors } from '@/configs';

interface HeaderDropDownProps {
  title: string;
  titleIcon?: string;
  items?: {
    id: string;
    title: string;
    icon: string;
  }[];
  onSelected?: (item: {}) => void;
}

export const HeaderDropDown = ({ title, titleIcon, items, onSelected }: HeaderDropDownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button $active-opacity={0.6} borderRadius="$xl" bg={Colors.input} flexDirection="row">
          <Text size="sm" fontWeight="$medium" color={Colors.blue} mr={4}>
            {title}
          </Text>

          {titleIcon && (
            <MaterialCommunityIcons name={titleIcon as any} size={16} color={Colors.blue} />
          )}
        </Button>
      </DropdownMenu.Trigger>

      {items?.length && (
        <DropdownMenu.Content>
          <DropdownMenu.Label>options</DropdownMenu.Label>

          {items?.map(item => (
            <DropdownMenu.Item key={item.id} onSelect={() => onSelected && onSelected(item)}>
              <DropdownMenu.ItemTitle>{item.title}</DropdownMenu.ItemTitle>
              <DropdownMenu.ItemIcon
                ios={{
                  name: item.icon,
                  pointSize: 15,
                  weight: 'semibold',
                }}
              />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      )}
    </DropdownMenu.Root>
  );
};
