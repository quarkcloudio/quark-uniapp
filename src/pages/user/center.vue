<script setup lang="ts">
function logout() {
  uni.removeStorageSync('token')
  uni.reLaunch({
    url: '/pages/login/login',
  })
}
</script>

<template>
  <nut-cell-group>
    <nut-cell title="链接样式" is-link />
    <nut-cell title="路由跳转 “/” " to="/" />
  </nut-cell-group>
  <nut-button block type="default" @click="logout()">
    退出登录
  </nut-button>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: "我的"
</route>
