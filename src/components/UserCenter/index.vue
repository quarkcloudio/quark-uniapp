<template>
  <view class="container">
    <view class="header">
      <nut-avatar class="avatar" size="large">
        <img src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
      </nut-avatar>
      <view class="username">
        杨过
      </view>
    </view>
    <view class="vip-card">
      
    </view>
  </view>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  style?: any,
  body?: Array<any>,
  data?: string | number | object,
  callback?: Function | object,
}>()

const { style, body, data, callback }	= toRefs(props)
</script>

<style lang="scss" >
  .container{
    padding-left: 15px;
    padding-right: 15px;
  }
  .header{
    display: flex;
    align-items: center;
    height: 80px;
  }
  .avatar{
    margin:0px 5px;
    width: 64px !important;
    height: 64px !important;
    float: left;
  }
  .avatar img{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .username{
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 31px;
    color: rgba(18, 24, 54, 1);
    text-align: left;
    vertical-align: top;
    margin-left: 10px;
  }
  .vip-card{
    left: 0px;
    top: 0px;
    width: 100%;
    height: 56px;
    opacity: 1;
    border-radius: 8px;
    background: rgba(245, 214, 156, 1);
  }
</style>
