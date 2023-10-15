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
    <view v-if="body.component === 'page'">
      <page :style="body.style" :navbar="body.navbar" :tabbar="body.tabbar" :content="body.content" :data="data" :callback="callback" />
    </view>
    <view v-if="body.component === 'swiper'">
      <nut-swiper
        :style="body.style"
        :width="body.width"
        :height="body.height"
        :direction="body.direction"
        :paginationVisible="body.paginationVisible"
        :paginationColor="body.paginationColor"
        :loop="body.loop"
        :duration="body.duration"
        :autoPlay="body.autoPlay"
        :initPage="body.initPage"
        :touchable="body.touchable"
        :isPreventDefault="body.isPreventDefault"
        :isStopPropagation="body.isStopPropagation"
      >
        <nut-swiper-item v-for="item in body.body" :style="item.style">
          <render :body="item.body" :data="data" :callback="callback" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
  </view>
  <view v-else>
    <view v-for="item in body">
      <render :body="item" :data="data" :callback="callback" />
    </view>
  </view>
</template>

<script lang="ts">
export default { name: 'render' }
</script>

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