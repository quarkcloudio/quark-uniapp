import { request } from '@/utils/request'

/** 获取用户信息 GET /api/miniapp/user/index */
export async function getUserInfo(options?: { [key: string]: any }) {
  const res = await request('/api/miniapp/user/index', {
    method: 'GET',
    ...(options || {}),
  })
  return res
}
