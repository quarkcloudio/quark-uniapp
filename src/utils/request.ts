// 发起网络请求
export async function request(url: string, options: any) {
  // #ifndef H5
  if (!url.includes('http'))
    url = import.meta.env.VITE_API_URL + url
  // #endif

  let token = uni.getStorageSync('token')
  if (!token)
    token = ''

  try {
    const res = await uni.request({
      url,
      data: options.data,
      method: options.method,
      header: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (res.statusCode === 401) {
      uni.navigateTo({
        url: '/pages/login/login',
      })
    }
    else if (res.statusCode === 404) {
      throw new Error('资源未找到')
    }
    else if (res.statusCode < 200 && res.statusCode >= 300) {
      console.error(res)
      throw new Error('内部服务错误')
    }
    else {
      return res.data
    }
  }
  catch (error) {
    console.error('请求异常', error)
    throw error
  }
}
