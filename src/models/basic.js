import { routerRedux } from 'dva/router';
import { leaveCount } from '@/services/basic';

const delay = timeout =>
  new Promise(resolve => {
    setTimeout(resolve, timeout);
  });

export default {
  namespace: 'basic',

  state: {},

  effects: {
    *leaveCount({ payload }, { call, put }) {
      while (true) {
        yield call(delay, 60000);
        const res = yield call(leaveCount);
        console.log(res);
      }
    },
  },

  reducers: {},
};
