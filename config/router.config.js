export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      {
        path: '/user/login',
        name: 'login',
        component: './User/Login',
      },
    ],
  },

  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/user' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          //  监控
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },

          // 工作台
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            // component: './Dashboard/Workplace',
          },
        ],
      },

      // 即时注单 note
      {
        path: '/note',
        name: '即时注单',
        icon: 'shopping-cart',
        routes: [],
      },

      // 用户管理 user
      {
        path: '/users',
        name: '用户管理',
        icon: 'user',
        routes: [
          {
            path: 'users/Extension',
            name: 'Extension',
            component: './Users/Extension',
          },
        ],
      },

      // 系统管理 system
      {
        path: '/system',
        name: '系统管理',
        icon: 'setting',
        routes: [],
      },

      // 平台管理  platform
      {
        path: '/platform',
        name: '平台管理',
        icon: 'appstore',
        routes: [],
      },

      // 现金管理  cash
      {
        path: '/cash',
        name: '现金管理',
        icon: 'money-collect',
        routes: [],
      },

      // 日志管理 Log
      {
        path: '/Log',
        name: '日志管理',
        icon: 'exception',
        routes: [],
      },

      // 报表查询 report
      {
        path: '/report',
        name: '报表查询',
        icon: 'search',
        routes: [],
      },

      // 风控管理 Wind control
      {
        path: '/windControl',
        name: '风控管理',
        icon: 'property-safety',
        routes: [],
      },
    ],
  },
];
