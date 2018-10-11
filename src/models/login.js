import { routerRedux } from 'dva/router';
import { fakeAccountLogin } from '@/services/login';

export default {
  namespace: 'login',

  state: {
    securityCodeId: '',
    message: '',
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      if (response.key === -1) {
        console.log(response);
        yield put({ type: 'changeMessage', payload: response });
        yield put({ type: 'changeImg' });
      } else {
        yield put(
          routerRedux.push({
            pathname: '/dashboard/monitor',
          })
        );
      }
    },
  },

  reducers: {
    changeImg(state, _) {
      const securityId = Math.random()
        .toString(36)
        .substring(2);

      return {
        ...state,
        securityCodeId: securityId,
      };
    },

    changeMessage(state, { payload }) {
      return {
        ...state,
        message: payload.message,
      };
    },
  },
};
