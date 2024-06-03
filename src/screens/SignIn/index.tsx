import { Box, Center, Text } from '@gluestack-ui/themed';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import TypeWriter from 'react-native-typewriter';

import { Colors } from '@/configs';

import { LoginButtons } from './components';

const TEXTS = [
  {
    text: 'ChatGPT',
    color: Colors.pink,
    backgroundColor: Colors.yellow,
  },
  {
    text: "Let's Create",
    color: Colors.blue,
    backgroundColor: Colors.pink,
  },
  {
    text: "Let's Design",
    color: Colors.yellow,
    backgroundColor: Colors.blue,
  },
];
enum TextType {
  GO = 1,
  BACK = -1,
}

export default function SignIn() {
  const [type, setType] = useState(TextType.GO);
  const [currentText, setCurrentText] = useState(0);
  const textColor = TEXTS[currentText].color;
  const backgroundColor = TEXTS[currentText].backgroundColor;
  const velocity = TextType.GO === type ? 200 : 50;

  const handleTypingEnd = () => {
    if (type === TextType.GO) {
      setTimeout(() => {
        setType(TextType.BACK);
      }, 800);
    } else {
      setTimeout(() => {
        setType(TextType.GO);
        setCurrentText((currentText + 1) % TEXTS.length);
      }, 200);
    }
  };

  const handleOnTyped = () => {
    if (type === TextType.GO) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  return (
    <Center bg={backgroundColor} h="$full">
      <Box alignItems="center" justifyContent="center" flexDirection="row" mt="-50%">
        <Text fontSize={30} color={textColor} fontWeight="bold">
          <TypeWriter
            typing={type as any}
            onTypingEnd={handleTypingEnd}
            onTyped={handleOnTyped}
            maxDelay={velocity}>
            {TEXTS[currentText].text}
          </TypeWriter>
        </Text>
        <Box h={30} w={30} bg={textColor} borderRadius={'$full'} />
      </Box>
      <LoginButtons />
    </Center>
  );
}
