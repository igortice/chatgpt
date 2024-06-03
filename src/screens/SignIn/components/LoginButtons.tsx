import { Ionicons, Zocial } from '@expo/vector-icons';
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';

import { Colors } from '@/configs';

export function LoginButtons() {
  const handleAppleLogin = () => {
    console.log('Apple login');
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
  };

  const handleEmailLogin = () => {
    console.log('Email login');
  };

  const handleLogin = () => {
    console.log('Login');
  };

  return (
    <Actionsheet defaultIsOpen>
      <ActionsheetContent backgroundColor={Colors.black} pb={15}>
        <ActionsheetItem mb={-7}>
          <Button
            $active-opacity={0.6}
            height={50}
            w="$full"
            rounded={12}
            bg={Colors.white}
            onPress={handleAppleLogin}>
            <Ionicons name="logo-apple" size={15} color={Colors.black} />
            <ButtonText ml="$2" size="sm" fontWeight={500} color={Colors.black}>
              Continue with Apple
            </ButtonText>
          </Button>
        </ActionsheetItem>

        <ActionsheetItem my={-7}>
          <Button
            $active-opacity={0.6}
            paddingVertical={5}
            height={50}
            w="$full"
            rounded={12}
            bg={Colors.dark}
            onPress={handleGoogleLogin}>
            <Ionicons name="logo-google" size={18} color={Colors.white} />
            <ButtonText ml="$2" size="sm" fontWeight={500} color={Colors.white}>
              Continue with Google
            </ButtonText>
          </Button>
        </ActionsheetItem>

        <ActionsheetItem my={-7}>
          <Button
            $active-opacity={0.6}
            paddingVertical={5}
            height={50}
            w="$full"
            rounded={12}
            bg={Colors.dark}
            onPress={handleEmailLogin}>
            <Zocial name="email" size={18} color={Colors.white} />
            <ButtonText ml="$2" size="sm" fontWeight={500} color={Colors.white}>
              Sign up with Email
            </ButtonText>
          </Button>
        </ActionsheetItem>

        <ActionsheetItem mt={-7}>
          <Button
            $active-opacity={0.6}
            paddingVertical={5}
            height={50}
            w="$full"
            rounded={12}
            variant="outline"
            borderColor={Colors.dark}
            borderWidth={3}
            onPress={handleLogin}>
            <ButtonText ml="$2" size="sm" fontWeight={500} color={Colors.white}>
              Log in
            </ButtonText>
          </Button>
        </ActionsheetItem>
      </ActionsheetContent>
    </Actionsheet>
  );
}
