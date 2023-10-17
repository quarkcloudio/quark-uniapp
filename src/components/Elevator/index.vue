<template>
  <nut-elevator
    :style="style"
    :height="height"
    :acceptKey="acceptKey"
    :indexList="indexList"
    :isSticky="isSticky"
    :spaceHeight="spaceHeight"
    :titleHeight="titleHeight"
  />
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  height?: number | string,
  acceptKey?: string,
  indexList?: Array<any>,
  isSticky?: boolean,
  spaceHeight?: number,
  titleHeight?: number,
  style?: any,
}>()

const { height, acceptKey, indexList, isSticky, spaceHeight, titleHeight, style}	= toRefs(props)
</script>

<style lang="scss" ></style>
