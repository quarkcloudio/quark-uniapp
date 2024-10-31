<script setup lang="ts">
import { toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  bottom?: boolean
  unactiveColor?: string
  activeColor?: string
  safeAreaInsetBottom?: boolean
  placeholder?: boolean
  style?: any
  items?: Array<any>
  data?: string | number | object
  callback?: Function | object
}>()

const { bottom, unactiveColor, activeColor, safeAreaInsetBottom, placeholder, style, items } = toRefs(props)
</script>

<template>
  <nut-tabbar
    :bottom="bottom"
    :unactive-color="unactiveColor"
    :active-color="activeColor"
    :safe-area-inset-bottom="safeAreaInsetBottom"
    :placeholder="placeholder"
    :style="style"
  >
    <nut-tabbar-item v-for="(item, index) in items" :key="index" :tab-title="item.tabTitle" :icon="item.icon" />
  </nut-tabbar>
</template>

<style lang="scss"></style>
