<template>
    <view v-if="typeof body === 'string' || typeof body === 'number'">
      {{ body }}
    </view>
    <view v-else-if="body?.hasOwnProperty('component')">
      <view v-if="body.component === 'view'">
        <view :style="body.style">
          <render :body="body.body" :data="data" :callback="callback" />
        </view>
      </view>
      <view v-if="body.component === 'image'">
        <image :style="body.style" :src="body.src" />
      </view>
    </view>
    <view v-else>
      <view v-for="item in body">
        <render :body="item" :data="data" :callback="callback" />
      </view>
    </view>
  </template>
  
  <script setup lang="ts">
  import { defineProps, toRefs } from 'vue'
  
  // 组件属性
  const props = defineProps<{
    body?: any,
    data?: string | number | object,
    callback?: Function | object,
  }>()
  
  const { body, data, callback }	= toRefs(props)
  </script>