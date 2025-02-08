<script setup lang="ts">
import services from '~/services'
import pagesJson from '@/pages.json'

const toast = useToast()
const captchaUrl = ref('')
const returnUrl = ref('pages/index/index')
const formData = reactive({
  username: '',
  password: '',
  captcha: {
    id: '',
    value: '',
  },
})

onLoad((option) => {
  if (option?.returnUrl !== undefined)
    returnUrl.value = option.returnUrl

  refreshCaptcha()
})

async function accountLogin() {
  const result: any = await services.login.accountLogin(formData)
  if (result?.code !== 200) {
    toast.error(result.msg)
    refreshCaptcha()
    return
  }
  uni.setStorageSync('token', result.data.token)

  const tabBarPaths = pagesJson.tabBar.list.map((item: any) => item.pagePath)
  if (tabBarPaths.includes(returnUrl.value)) {
    uni.switchTab({
      url: `/${returnUrl.value}`,
    })
  }
  else {
    uni.navigateTo({
      url: `/${returnUrl.value}`,
    })
  }
}

async function refreshCaptcha() {
  const result: any = await services.login.getCaptchaId()
  if (result?.code !== 200) {
    toast.error(result.msg)
    return
  }
  formData.captcha.id = result.data.captchaId
  formData.captcha.value = ''
  captchaUrl.value = `/api/captcha/index/getImage/${formData.captcha.id}?timestamp=${new Date().getTime()}`
}
</script>

<template>
  <view>
    <view class="logo">
      <img src="/static/logo.png" class="logo-img">
    </view>
    <nut-config-provider
      :theme-vars="{
        cellBoxShadow: 'none',
      }"
    >
      <nut-form>
        <view class="login-from-item">
          <nut-form-item>
            <nut-input v-model="formData.username" class="nut-input-text" placeholder="用户名/邮箱/手机号" type="text" />
          </nut-form-item>
          <nut-form-item>
            <nut-input v-model="formData.password" class="nut-input-text" placeholder="请输入密码" type="password" />
          </nut-form-item>
          <nut-form-item v-model="formData.captcha.value">
            <nut-input class="nut-input-text" placeholder="请输入验证码" type="text">
              <template #right>
                <img v-if="captchaUrl" :src="captchaUrl" @click="refreshCaptcha()">
              </template>
            </nut-input>
          </nut-form-item>
        </view>
        <view class="login-from-button">
          <nut-button block type="primary" @click="accountLogin()">
            登录
          </nut-button>
        </view>
      </nut-form>
    </nut-config-provider>
  </view>
</template>

<style lang="scss">
.logo {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
}
.logo-img {
  width: 100px;
  height: 100px;
}
.login-from-item {
  padding: 0rem 1rem;
}
.login-from-button {
  padding: 1rem 1rem;
}
</style>

<route lang="yaml">
  style:
    navigationBarTitleText: "登录"
</route>
