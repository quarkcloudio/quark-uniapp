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
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]
      const returnUrl = currentPage.route || '/pages/index/index'
      uni.navigateTo({
        url: `/pages/login/login?returnUrl=${returnUrl}`,
      })
    }
    else if (res.statusCode === 404) {
      uni.showToast({
        title: '资源未找到',
        icon: 'error',
      })
    }
    else if (res.statusCode < 200 && res.statusCode >= 300) {
      console.error(res)
      uni.showToast({
        title: '内部服务错误',
        icon: 'error',
      })
    }
    else {
      return res.data
    }
  }
  catch (error) {
    console.error(error)
    uni.showToast({
      title: '网络请求异常',
      icon: 'error',
    })
  }
}
