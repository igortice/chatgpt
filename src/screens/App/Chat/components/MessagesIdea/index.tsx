import { Box, Center, Image } from '@gluestack-ui/themed';

import { Colors, Images } from '@/configs';

export const MessagesIdea = () => {
  return (
    <Center>
      <Box bg={Colors.black} rounded="$full">
        <Image source={Images.logoWhite} h={100} w={100} alt="logo white" />
      </Box>
    </Center>
  );
};
