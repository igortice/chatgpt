import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface IAppProviderProps {
  children: React.ReactNode;
}

export function DrawerProvider({ children }: IAppProviderProps) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <>{children}</>
    </GestureHandlerRootView>
  );
}
