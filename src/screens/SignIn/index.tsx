import { Center, Text } from '@gluestack-ui/themed';

import { LoginButtons } from './components';

export default function SignIn() {
  return (
    <Center bg="$amber600" h="$full">
      <Text color="$white">SignIn IOS</Text>
      <LoginButtons />
    </Center>
  );
}
