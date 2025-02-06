<script setup lang="ts">
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
        <image src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
      </nut-avatar>
    </view>
    <view class="username">
      tangtanglove
    </view>
    <nut-cell-group title="个人中心">
      <nut-cell title="昵称" desc="admin" is-link />
      <nut-cell title="手机号" desc="12345678901" is-link />
      <nut-cell title="密码" desc="点击修改密码" is-link />
    </nut-cell-group>
    <nut-cell-group title="订单中心">
      <nut-cell title="待付款" is-link />
      <nut-cell title="待核销" to="/" />
      <nut-cell title="已完成" to="/" />
      <nut-cell title="退款" to="/" />
    </nut-cell-group>
    <nut-button block type="default" @click="logout()">
      退出登录
    </nut-button>
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
  margin-bottom: 1.25rem;
}
.username {
  text-align: center;
}
</style>
