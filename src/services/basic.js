import request from '@/utils/request';

export async function getTopMenu() {
  return request('/api/getTopMenu');
}

export async function leaveCount() {
  return request('/api/sys/lotSysMessageUser/leaveCount', {
    method: 'POST',
  });
}
