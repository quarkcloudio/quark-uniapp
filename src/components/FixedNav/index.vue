<template>
  <nut-fixed-nav
    :style="style"
    :visible="visible"
    :navList="navList"
    :activeColor="activeColor"
    :activeText="activeText"
    :unActiveText="unActiveText"
    :type="type"
    :overlay="overlay"
    :position="position"
  />
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
 
// 组件属性
const props = defineProps<{
  visible?: boolean,
  navList?:  Array<any>,
  activeColor?: string,
  activeText?: string,
  unActiveText?: string,
  type?: string,
  overlay?: boolean,
  position?: object,
  style?: any,
}>()

const { visible, navList, activeColor, activeText, unActiveText, type, overlay, position, style }	= toRefs(props)
</script>

<style lang="scss" ></style>
