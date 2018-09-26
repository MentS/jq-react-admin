import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { fakeAccountLogin } from '@/services/login';

export default {
  namespace: 'login',

  state: {},

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      console.log(response);
      yield put(
        routerRedux.push({
          pathname: '/dashboard/dash',
        })
      );
      if (response) {
      }
    },
  },

  reducers: {},
};
