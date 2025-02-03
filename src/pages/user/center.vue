<script setup lang="ts">
function logout() {
  uni.removeStorageSync('token')
  uni.reLaunch({
    url: '/pages/login/login',
  })
}
</script>

<template>
  <nut-button block type="default" @click="logout()">
    退出登录
  </nut-button>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: "我的"
</route>
