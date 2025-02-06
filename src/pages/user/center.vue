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
      {{ user?.username ?? '-' }}
    </view>
    <nut-cell-group>
      <nut-cell title="昵称" to="/">
        <template #desc>
          <text class="nut-cell-text">
            {{ user?.nickname }}
          </text>
        </template>
      </nut-cell>
      <nut-cell title="手机号" to="/">
        <template #desc>
          <text class="nut-cell-text">
            {{ user?.phone }}
          </text>
        </template>
      </nut-cell>
      <nut-cell title="密码" to="/">
        <template #desc>
          <text class="nut-cell-text">
            点击修改密码
          </text>
        </template>
      </nut-cell>
    </nut-cell-group>
    <nut-grid>
      <nut-grid-item text="待付款">
        <nut-icon name="dshop" />
      </nut-grid-item>
      <nut-grid-item text="待核销">
        <nut-icon name="scan" />
      </nut-grid-item>
      <nut-grid-item text="退款/售后">
        <nut-icon name="retweet" />
      </nut-grid-item>
      <nut-grid-item text="全部订单">
        <nut-icon name="order" />
      </nut-grid-item>
    </nut-grid>
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
  margin-bottom: 1.25rem;
}
.logout-btn {
  margin-top: 1.25rem;
}
.nut-cell-text {
  color: #979797;
}
</style>
