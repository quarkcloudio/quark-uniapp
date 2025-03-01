import { request } from '@/utils/request'

/** 获取商品列表接口 GET /api/miniapp/item/index */
export async function getList(page: any, pageSize: any) {
  const res = await request('/api/miniapp/item/index', {
    method: 'GET',
    data: {
      page,
      pageSize,
    },
  })
  return res
}
