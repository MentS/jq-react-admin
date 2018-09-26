import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('http://yapi.jq.cn/mock/43/mock/user', {
    method: 'POST',
    body: params,
  });
}
