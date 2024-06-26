import { Box, KeyboardAvoidingView } from '@gluestack-ui/themed';
import { useState } from 'react';
import { Platform } from 'react-native';

import { ERole, TMessages } from '../../utils/types';
import { InputChat } from '../InputChat';
import { MessagesChat } from '../MessagesChat';
import { MessagesIdea } from '../MessagesIdea';

export const BodyChat = () => {
  const [messages, setMessages] = useState<TMessages>([]);

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
    <Box h="$full" w="$full">
      {(messages.length > 0 && <MessagesChat messages={messages} />) || <MessagesIdea />}
      <KeyboardAvoidingView
        w="100%"
        bottom={0}
        left={0}
        position="absolute"
        keyboardVerticalOffset={70}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <InputChat onSend={handleOnSend} />
      </KeyboardAvoidingView>
    </Box>
  );
};
