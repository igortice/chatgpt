import { Box, Center, Image } from '@gluestack-ui/themed';

import { Colors, Images } from '@/configs';

export const MessagesIdea = () => {
  return (
    <Center h="90%">
      <Box bg={Colors.black} rounded="$full" p={5}>
        <Image source={Images.logoWhite} h={50} w={50} alt="logo white" />
      </Box>
    </Center>
  );
};
