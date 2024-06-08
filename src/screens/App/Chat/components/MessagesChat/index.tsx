import { Box, Text } from '@gluestack-ui/themed';
import { FlashList } from '@shopify/flash-list';

import { Colors } from '@/configs';

import { ERole, TMessage, TMessages } from '../../utils/types';

type TMessagesChatProps = {
  messages: TMessages;
};

type TLayoutFlatListItemProps = {
  item: TMessage;
};

const LayoutFlatListItem = ({ item }: TLayoutFlatListItemProps) => {
  if (item.role === ERole.user) {
    return (
      <Box alignItems="flex-end" my={12}>
        <Box w="60%" bg={Colors.input} rounded="$xl" px={12} py={6}>
          <Text size="lg" fontWeight="$medium">
            {item.message}
          </Text>
        </Box>
      </Box>
    );
  }

  if (item.role === ERole.gpt) {
    return <Text>{item.message}</Text>;
  }

  return null;
};

export const MessagesChat = ({ messages }: TMessagesChatProps) => {
  return (
    <Box h="$full" w="$full" bg={Colors.light}>
      <Box flex={1} p={12}>
        <FlashList
          data={messages}
          renderItem={({ item }) => <LayoutFlatListItem item={item} />}
          estimatedItemSize={400}
          keyboardDismissMode="on-drag"
        />
      </Box>
    </Box>
  );
};
