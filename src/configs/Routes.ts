export default {
  app: {
    drawer: {
      chat: {
        name: 'chat',
        path: '/(app)/(drawer)/chat',
      },
      dalle: {
        name: 'dalle',
        path: '/(app)/(drawer)/dalle',
      },
    },
    config: {
      name: 'config',
      title: 'Config',
      path: '/(app)/config',
    },
  },
  auth: {
    home: {
      name: 'home',
      path: '/(auth)/home',
    },
    signInEmail: {
      name: 'sign-in-email',
      title: 'Sign in with email',
      path: '/(auth)/sign-in-email',
    },
  },
};
