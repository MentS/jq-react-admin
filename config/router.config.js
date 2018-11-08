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
      { path: '/', redirect: '/dashboard/monitor' },
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
        name: '注单列表',
        icon: 'shopping-cart',
        routes: [],
      },

      // 会员报表 report
      {
        path: '/MembershipReport',
        name: '会员报表',
        icon: 'search',
        routes: [],
      },

      // 代理报表 report
      {
        path: '/ProxyReport',
        name: '代理报表',
        icon: 'search',
        routes: [],
      },

      // 游戏报表 report
      {
        path: '/GameReport',
        name: '游戏报表',
        icon: 'search',
        routes: [],
      },

      // 代理分红 bonus
      {
        path: '/bonus',
        component: './Bonus/index',
        name: '代理分红',
        icon: 'search',
        routes: [],
      },

      // 真人返水 rebate
      {
        path: '/rebate',
        name: '真人返水',
        icon: 'search',
        routes: [],
      },

      // 转账 Transfer accounts
      {
        path: '/TransferAccounts',
        name: '转账记录',
        icon: 'search',
        routes: [],
      },

      // 游戏设置 Game settings
      {
        path: '/GameSettings',
        name: '游戏设置',
        icon: 'setting',
        routes: [],
      },

      // 404
      {
        component: '404',
      },
    ],
  },
];
