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
    <view class="user-card">
      <view class="avatar-box">
        <nut-avatar size="large">
          <image :src="user?.avatar" />
        </nut-avatar>
      </view>
      <view class="username">
        {{ user?.username ?? '-' }}
      </view>
      <view class="content">
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
      </view>
    </view>
    <view class="content">
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
  </view>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: "我的"
</route>

<style lang="scss" scoped>
.content {
  padding: 0 0.625rem;
}
.user-card {
  width: 100%;
  margin: 0 auto;
  padding: 0px;
  padding-top: 17px;
  background-size: 100% auto;
  background: url(/static/images/user-card-bg.png) no-repeat scroll 0 0 / 100% auto;
}
.avatar-box {
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
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
