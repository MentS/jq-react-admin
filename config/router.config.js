export default [
  // user
  {
    path: '/',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/', redirect: '/user/login' },
      {
        path: '/user',
        name: 'user',
        routes: [
          {
            path: '/user/login',
            name: 'login',
            component: './User/Login',
          },
        ],
      },
    ],
  },
];
