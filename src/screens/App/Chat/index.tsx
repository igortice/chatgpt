import { Center } from '@gluestack-ui/themed';

import { BodyMessage, CustomDrawerScreenHeader } from './components';

export default function AppChat() {
  return (
    <Center h="$full">
      <CustomDrawerScreenHeader />

      <BodyMessage />
    </Center>
  );
}
