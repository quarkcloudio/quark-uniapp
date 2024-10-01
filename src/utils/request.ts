// 发起网络请求
export async function request(url: string, options: any) {
  // #ifndef H5
  if (!url.includes('http'))
    url = import.meta.env.VITE_API_URL + url

  // #endif

  let token = uni.getStorageSync('token')
  if (!token)
    token = ''

  const res = await uni.request({
    url,
    data: options.data,
    method: options.method,
    header: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}
