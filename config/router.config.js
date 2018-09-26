export default [
  {
    path: '/dashboard',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/dashboard', redirect: '/dashboard/dash' },
      { path: '/dashboard/dash', component: './Dashboard/Dash' },
    ],
  },
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
  // app
  // {
  //   path: '/dashboard',
  //   component: '../layouts/BasicLayout',
  //   routes: [
  //     { path: '/dashboard', redirect: '/dashboard/dash' },
  //     {
  //       path: '/dashboard/dash',
  //       name: 'dash',
  //       component: '/Dashboard/Dash',
  //     },
  //     // {
  //     //   path: '/dashboard',
  //     //   name: 'dashboard',
  //     //   routes: [
  //     //     {
  //     //       path: '/dashboard/index',
  //     //       name: 'index',
  //     //       component: '/Dashboard/index',
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },

  {
    path: '/dashboard',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/dashboard', redirect: '/dashboard/dash' },
      { path: '/dashboard/dash', component: './Dashboard/Dash' },
    ],
  },
];
