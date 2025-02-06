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
  <nut-form>
    <nut-form-item>
      <nut-input v-model="formData.username" class="nut-input-text" placeholder="用户名/邮箱/手机号" type="text" />
    </nut-form-item>
    <nut-form-item>
      <nut-input v-model="formData.password" class="nut-input-text" placeholder="请输入密码" type="password" />
    </nut-form-item>
    <nut-form-item>
      <nut-input v-model="formData.captcha.value" class="nut-input-text" placeholder="请输入验证码" type="text">
        <template #right>
          <img v-if="captchaUrl" :src="captchaUrl" @click="refreshCaptcha()">
        </template>
      </nut-input>
    </nut-form-item>
    <nut-cell>
      <nut-button block type="primary" @click="accountLogin()">
        提交
      </nut-button>
    </nut-cell>
  </nut-form>
</template>

<style lang="scss">
</style>

<route lang="yaml">
  style:
    navigationBarTitleText: "登录"
    navigationStyle: "default"
</route>
