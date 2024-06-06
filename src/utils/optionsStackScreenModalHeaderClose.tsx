import { Ionicons } from '@expo/vector-icons';
import { Button } from '@gluestack-ui/themed';
import { router } from 'expo-router';

const headerRightModal = () => {
  return (
    <Button variant="link" $active-opacity={0.6} onPress={() => router.back()}>
      <Ionicons name="close" size={24} />
    </Button>
  );
};

export const optionsStackScreenModalHeaderClose = ({ title }: { title: string }) => {
  return {
    presentation: 'modal',
    headerShown: true,
    title,
    headerRight: headerRightModal,
  };
};
