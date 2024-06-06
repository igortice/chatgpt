import { Box, Pressable, Text } from '@gluestack-ui/themed';
import { Keyboard } from 'react-native';

import { Colors } from '@/configs';

import { FooterInput } from '../FooterInput';

export const BodyMessage = () => {
  return (
    <Box h="$full" w="$full" bg={Colors.light}>
      <Pressable flex={1} onPress={() => Keyboard.dismiss()}>
        <Box flex={1}>
          <Text>BodyMessage</Text>
        </Box>
      </Pressable>

      <FooterInput />
    </Box>
  );
};
