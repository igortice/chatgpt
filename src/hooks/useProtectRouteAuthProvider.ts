import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import { Routes } from '@/configs';

const pathAppHome = Routes.app.drawer.chat.path;
const pathAuthHome = Routes.auth.home.path;

export function useProtectRouteAuthProvider() {
  const { userIsLoggedIn } = { userIsLoggedIn: true };

  const router = useRouter();

  useEffect(() => {
    const replaceTo = userIsLoggedIn ? pathAppHome : pathAuthHome;

    router.replace(replaceTo);
  }, [userIsLoggedIn, router]);
}
