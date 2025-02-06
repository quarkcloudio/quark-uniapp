import { request } from '@/utils/request'

/** 获取验证码ID接口 GET /api/captcha/index/getId */
export async function getCaptchaId(options?: { [key: string]: any }) {
  const res = await request('/api/captcha/index/getId', {
    method: 'GET',
    ...(options || {}),
  })
  return res
}

/** 用户登录接口 POST /api/miniapp/login/login */
export async function accountLogin(body: any) {
  const res = await request('/api/miniapp/login/login', {
    method: 'POST',
    data: body,
  })
  return res
}
