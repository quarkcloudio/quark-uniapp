import { request } from '@/utils/request'

// 发起GET请求
export async function get(params: any) {
  const url = params.url
  const data = params.data
  const res = await request(url, {
    method: 'GET',
    data,
  })

  return res
}

// 发起POST请求
export async function post(params: any) {
  const url = params.url
  const data = params.data

  const res = await request(url, {
    method: 'POST',
    data,
  })

  return res
}
