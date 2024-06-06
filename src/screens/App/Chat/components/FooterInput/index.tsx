import { Ionicons } from '@expo/vector-icons';
import { Box, Button, HStack, KeyboardAvoidingView } from '@gluestack-ui/themed';
import { useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StyledBlurView, StyledInputMessage } from '@/components';
import { Colors } from '@/configs';

export const FooterInput = () => {
  const inputRef = useRef<any>(null);
  const { bottom } = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={70}>
      <StyledBlurView intensity={90} tint="extraLight" pb={bottom} pt={12} px={12}>
        <HStack space="xs" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Button variant="link" $active-opacity={0.6} onPress={() => console.log('emoji')}>
              <Ionicons name="add-circle" size={38} color={Colors.greyLight} />
            </Button>
          </Box>

          <Box flex={1}>
            <StyledInputMessage ref={inputRef} placeholder="Message" multiline />
          </Box>

          <Box>
            <Button
              rounded="$full"
              variant="link"
              $active-opacity={0.6}
              onPress={() => console.log('send')}>
              <Ionicons name="arrow-up-circle-sharp" size={38} color={Colors.black} />
            </Button>
          </Box>
        </HStack>
      </StyledBlurView>
    </KeyboardAvoidingView>
  );
};
