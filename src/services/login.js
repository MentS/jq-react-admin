import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/loginSubmit', {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  });
}

export async function getPublicKey() {
  return request('/api/getPublicKey');
}
