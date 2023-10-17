<template>
  <nut-divider
    :style="style"
    :dashed="dashed"
    :hairline="hairline"
    :contentPosition="contentPosition"
    :direction="direction"
  >
    <render :body="body" :data="data" :callback="callback" />
  </nut-divider>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  dashed?: boolean,
  hairline?: boolean,
  contentPosition?: string,
  direction?: string,
  style?: any,
  body?: any,
  data?: any,
  callback?: Function | object,
}>()

const { dashed, hairline, contentPosition, direction, style, body, data, callback }	= toRefs(props)
</script>

<style lang="scss" ></style>
