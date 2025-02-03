<script setup lang="ts">
import { get, post } from '~/services/action'

const toast = useToast()
const captchaUrl = ref('')
const formData = reactive({
  username: '',
  password: '',
  captcha: {
    id: '',
    value: '',
  },
})

onLoad((_) => {
  refrashCaptcha()
})

async function accountLogin() {
  const result: any = await post({
    url: '/api/miniapp/login/login',
    data: formData,
  })
  if (result?.code !== 200) {
    toast.error(result.msg)
    refrashCaptcha()
    return
  }
  console.log(result)
}

async function refrashCaptcha() {
  const result: any = await get({
    url: '/api/captcha/index/getId',
  })
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
          <img v-if="captchaUrl" :src="captchaUrl" @click="refrashCaptcha()">
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
