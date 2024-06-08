import { Box, KeyboardAvoidingView } from '@gluestack-ui/themed';
import { useState } from 'react';
import { Platform } from 'react-native';

import { Colors } from '@/configs';
import { MOCK_MESSAGES_CHAT } from '@/mocks';

import { ERole, TMessages } from '../../utils/types';
import { InputChat } from '../InputChat';
import { MessagesChat } from '../MessagesChat';

export const BodyChat = () => {
  const [messages, setMessages] = useState<TMessages>(MOCK_MESSAGES_CHAT);

  const handleOnSend = (message: string) => {
    if (message.trim() === '') return;

    setMessages(prev => [
      ...prev,
      {
        message,
        role: ERole.user,
      },
    ]);
  };

  return (
    <Box h="$full" w="$full" bg={Colors.light}>
      <KeyboardAvoidingView
        w="100%"
        h="100%"
        left={0}
        bottom={0}
        position="absolute"
        keyboardVerticalOffset={70}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Box flex={1} p={12}>
          <MessagesChat messages={messages} />
        </Box>

        <InputChat onSend={handleOnSend} />
      </KeyboardAvoidingView>
    </Box>
  );
};
