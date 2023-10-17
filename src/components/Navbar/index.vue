<template>
  <nut-navbar
    :style="style"
    :title="title"
    :desc="desc"
    :leftShow="leftShow"
    :titleIcon="titleIcon"
    :border="border"
    :fixed="fixed"
    :placeholder="placeholder"
    :safeAreaInsetTop="safeAreaInsetTop"
    :zIndex="zIndex"
  >
    <render :body="body" :data="data" :callback="callback" />
  </nut-navbar>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  title?: string,
  desc?: string,
  leftShow?: boolean,
  titleIcon?: boolean,
  border?: boolean,
  fixed?: boolean,
  placeholder?: boolean,
  safeAreaInsetTop?: boolean,
  zIndex?: number | string,
  style?: any,
  body?: any,
  data?: any,
  callback?: Function | object,
}>()

const { title, desc, leftShow, style, body, data, callback }	= toRefs(props)
</script>

<style lang="scss" ></style>
