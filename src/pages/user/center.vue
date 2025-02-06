<script setup lang="ts">
import services from '~/services'

const toast = useToast()
const user: any = ref(undefined)

onShow((_) => {
  getUserInfo()
})

async function getUserInfo() {
  const result: any = await services.user.getUserInfo()
  if (result?.code !== 200) {
    toast.error(result.msg)
    return
  }
  user.value = result?.data
}

function logout() {
  uni.removeStorageSync('token')
  uni.reLaunch({
    url: '/pages/login/login',
  })
}
</script>

<template>
  <view class="page">
    <view class="avatar-box">
      <nut-avatar size="large">
        <image :src="user?.avatar" />
      </nut-avatar>
    </view>
    <view class="username">
      {{ user?.username }}
    </view>
    <nut-cell-group title="账号信息">
      <nut-cell title="昵称" :desc="user?.nickname" to="/" />
      <nut-cell title="手机号" :desc="user?.phone" to="/" />
      <nut-cell title="密码" desc="点击修改密码" to="/" />
    </nut-cell-group>
    <nut-cell-group title="订单中心">
      <nut-cell title="待付款" to="/" />
      <nut-cell title="待核销" to="/" />
      <nut-cell title="已完成" to="/" />
      <nut-cell title="退款" to="/" />
    </nut-cell-group>
    <view class="logout-btn">
      <nut-button block type="default" @click="logout()">
        退出登录
      </nut-button>
    </view>
  </view>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: "我的"
</route>

<style lang="scss">
.page {
  background-color: #f6f6f6;
  padding: 0.625rem;
  height: 100dvh;
}
.avatar-box {
  text-align: center;
  margin-top: 1.25rem;
  margin-bottom: 0.8rem;
}
.username {
  text-align: center;
}
.logout-btn {
  margin-top: 1.25rem;
}
</style>
