import { Center } from '@gluestack-ui/themed';

import { Colors } from '@/configs';

import { CustomDrawerScreenHeader } from '../CustomDrawerScreenHeader';

interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <Center h="$full" bg={Colors.light}>
      <CustomDrawerScreenHeader />

      {children}
    </Center>
  );
}
