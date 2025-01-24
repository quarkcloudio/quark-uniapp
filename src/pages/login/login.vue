<script setup lang="ts">
const login = reactive({
  type: 'account',
  username: '',
  password: '',
})
</script>

<template>
  <nut-form>
    <nut-form-item>
      <nut-input v-model="login.username" class="nut-input-text" placeholder="用户名/邮箱/手机号" type="text" />
    </nut-form-item>
    <nut-form-item>
      <nut-input v-model="login.password" class="nut-input-text" placeholder="请输入密码" type="password" />
    </nut-form-item>
    <nut-cell>
      <nut-button type="primary" block>
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
