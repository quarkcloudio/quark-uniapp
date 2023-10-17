<template>
  <nut-sticky
    :style="style"
    :position="position"
    :top="top"
    :zIndex="zIndex"
    :parentHeight="parentHeight"
  >
    <render :body="body" :data="data" :callback="callback" />
  </nut-sticky>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  position?: string,
  top?: number,
  zIndex?: number,
  parentHeight?: number,
  style?: any,
  body?: any,
  data?: any,
  callback?: Function | object,
}>()

const { position, top, zIndex, parentHeight, style, body, data, callback }	= toRefs(props)
</script>

<style lang="scss" ></style>
