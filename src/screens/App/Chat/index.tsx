import { Center } from '@gluestack-ui/themed';

import { BodyChat, CustomDrawerScreenHeader } from './components';

export default function AppChat() {
  return (
    <Center h="$full">
      <CustomDrawerScreenHeader />

      <BodyChat />
    </Center>
  );
}
