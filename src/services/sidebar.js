import request from '@/utils/request';

export async function getTopMenu() {
  return request('/api/getTopMenu');
}
