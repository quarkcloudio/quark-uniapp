<template>
  <nut-tabs
    :style="style"
    :color="color"
    :background="background"
    :direction="direction"
    :type="type"
    :swipeable="swipeable"
    :titleScroll="titleScroll"
    :ellipsis="ellipsis"
    :animatedTime="animatedTime"
    :titleGutter="titleGutter"
    :size="size"
    :autoHeight="autoHeight"
    :name="name"
  >
    <nut-tab-pane v-for="item in body" :style="item.style" :title="item.title" :paneKey="item.paneKey" :disabled="item.disabled">
      <render :body="body" :data="data" :callback="callback" />
    </nut-tab-pane>
  </nut-tabs>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  color?: string,
  background?: string,
  direction?: string,
  type?: string,
  swipeable?: boolean,
  titleScroll?: boolean,
  ellipsis?: boolean,
  animatedTime?: number | string,
  titleGutter?: number | string,
  size?: 'large' | 'normal' | 'small',
  autoHeight?: boolean,
  name?: string,
  style?: any,
  body?: Array<any>,
  data?: string | number | object,
  callback?: Function | object,
}>()

const { color, background, direction, type, swipeable, titleScroll, ellipsis, animatedTime, titleGutter, size, autoHeight, name, style, body, data, callback }	= toRefs(props)
</script>

<style lang="scss" ></style>
