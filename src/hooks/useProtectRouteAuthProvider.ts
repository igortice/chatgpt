import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import { Routes } from '@/configs';

const routerHome = Routes.homeApp;
const routerSignIn = Routes.signIn;

export function useProtectRouteAuthProvider() {
  const { userIsLoggedIn } = { userIsLoggedIn: false };

  const router = useRouter();

  useEffect(() => {
    const replaceTo = userIsLoggedIn ? routerHome : routerSignIn;

    router.replace(replaceTo);
  }, [userIsLoggedIn, router]);
}
