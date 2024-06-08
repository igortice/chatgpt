import { Ionicons } from '@expo/vector-icons';
import { Box, Button, HStack } from '@gluestack-ui/themed';
import { useRef, useState } from 'react';
import Animated, {
  FadeIn,
  runOnJS,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StyledBlurView, StyledInputMessage } from '@/components';
import { Colors } from '@/configs';

const DURATION = 100;
const DELAY = 100;

interface InputChatProps {
  onSend: (message: string) => void;
}

export const InputChat = ({ onSend }: InputChatProps) => {
  const { bottom } = useSafeAreaInsets();
  const inputRef = useRef<any>(null);
  const [showActionsButtons, setShowActionsButtons] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const opacityCamera = useSharedValue<number>(0);
  const opacityImage = useSharedValue<number>(0);
  const opacityFolder = useSharedValue<number>(0);
  const opacityAdd = useSharedValue<number>(1);

  const handleShowActionsButtons = () => {
    opacityAdd.value = withDelay(
      0 * DELAY,
      withTiming(0, { duration: DURATION }, finished => {
        if (finished) runOnJS(setShowActionsButtons)(true);
      }),
    );
    opacityCamera.value = withDelay(1 * DELAY, withTiming(1, { duration: DURATION }));
    opacityImage.value = withDelay(2 * DELAY, withTiming(1, { duration: DURATION }));
    opacityFolder.value = withDelay(3 * DELAY, withTiming(1, { duration: DURATION }));
  };

  const handleHideActionsButtons = () => {
    opacityFolder.value = withDelay(0 * (DELAY / 2), withTiming(0, { duration: DURATION }));
    opacityImage.value = withDelay(1 * (DELAY / 2), withTiming(0, { duration: DURATION }));
    opacityCamera.value = withDelay(2 * (DELAY / 2), withTiming(0, { duration: DURATION }));
    opacityAdd.value = withDelay(
      3 * (DELAY / 2),
      withTiming(1, { duration: DURATION }, finished => {
        if (finished) {
          runOnJS(setShowActionsButtons)(false);
        }
      }),
    );
  };

  const handleOnSend = () => {
    onSend(message);
    setMessage('');
  };

  return (
    <StyledBlurView intensity={90} tint="extraLight" pb={bottom} pt={12} px={12}>
      <HStack space="xs" flexDirection="row" justifyContent="space-between" alignItems="center">
        <HStack space="md">
          {(showActionsButtons && (
            <>
              <Animated.View style={{ opacity: opacityCamera }}>
                <Button variant="link" $active-opacity={0.6} onPress={() => console.log('emoji')}>
                  <Ionicons name="camera-outline" size={30} color={Colors.grey} />
                </Button>
              </Animated.View>

              <Animated.View style={{ opacity: opacityImage }}>
                <Button variant="link" $active-opacity={0.6} onPress={() => console.log('emoji')}>
                  <Ionicons name="image-outline" size={30} color={Colors.grey} />
                </Button>
              </Animated.View>

              <Animated.View style={{ opacity: opacityFolder }}>
                <Button variant="link" $active-opacity={0.6} onPress={() => console.log('emoji')}>
                  <Ionicons name="folder-outline" size={30} color={Colors.grey} />
                </Button>
              </Animated.View>
            </>
          )) || (
            <Animated.View style={{ opacity: opacityAdd }}>
              <Button variant="link" $active-opacity={0.6} onPress={handleShowActionsButtons}>
                <Ionicons name="add-circle" size={34} color={Colors.grey} />
              </Button>
            </Animated.View>
          )}
        </HStack>

        <Box flex={1}>
          <StyledInputMessage
            onPressIn={handleHideActionsButtons}
            ref={inputRef}
            value={message}
            onChangeText={setMessage}
            placeholder="Message"
            multiline
          />
        </Box>

        {message?.length > 0 && (
          <Animated.View entering={FadeIn}>
            <Button rounded="$full" variant="link" $active-opacity={0.6} onPress={handleOnSend}>
              <Ionicons name="arrow-up-circle" size={34} color={Colors.grey} />
            </Button>
          </Animated.View>
        )}
      </HStack>
    </StyledBlurView>
  );
};
