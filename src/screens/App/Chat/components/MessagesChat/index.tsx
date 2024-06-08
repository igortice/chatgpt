import { Box, HStack, Image, Text } from '@gluestack-ui/themed';
import { FlashList } from '@shopify/flash-list';
import { useRef } from 'react';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';

import { Colors, Images } from '@/configs';

import { ERole, TMessage, TMessages } from '../../utils/types';

type TMessagesChatProps = {
  messages: TMessages;
};

type TLayoutFlatListItemProps = {
  item: TMessage;
  lastItem: boolean;
};

const LayoutFlatListItem = ({ item }: TLayoutFlatListItemProps) => {
  if (item.role === ERole.user) {
    return (
      <Box alignItems="flex-end" my={12}>
        <Animated.View entering={FadeInRight.duration(500).delay(100) || undefined}>
          <Box w="60%" bg={Colors.input} rounded="$xl" px={12} py={6}>
            <Text size="lg" fontWeight="$medium">
              {item.message}
            </Text>
          </Box>
        </Animated.View>
      </Box>
    );
  }

  if (item.role === ERole.gpt) {
    return (
      <Box my={12}>
        <Animated.View entering={FadeInLeft.duration(500).delay(100) || undefined}>
          <HStack space="md">
            <Image w={36} h={36} borderRadius={100} source={Images.logoDark} alt="Logo" />
            <Box py={2}>
              <Text size="lg" fontWeight="$medium">
                {item.message}
              </Text>
            </Box>
          </HStack>
        </Animated.View>
      </Box>
    );
  }

  return null;
};

export const MessagesChat = ({ messages }: TMessagesChatProps) => {
  const scrollViewRef = useRef(null);

  const handleOnContentSizeChange = () => {
    if (scrollViewRef.current) {
      // @ts-ignore
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <Box flex={1}>
      <Box h="$full" w="$full" bg={Colors.light}>
        <Box flex={1} p={12}>
          <FlashList
            ref={scrollViewRef}
            data={messages}
            renderItem={({ item }) => (
              <LayoutFlatListItem item={item} lastItem={messages[messages.length - 1] === item} />
            )}
            estimatedItemSize={400}
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
            onContentSizeChange={handleOnContentSizeChange}
          />
        </Box>
      </Box>
    </Box>
  );
};
