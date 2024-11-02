<script setup lang="ts">
import { toRefs } from 'vue'
import { useTabbarValueStore } from '~/stores/tabbarValue'

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

// 响应式数据
const { bottom, unactiveColor, activeColor, safeAreaInsetBottom, placeholder, style, items } = toRefs(props)
const tabbarValueStore = useTabbarValueStore()

// 事件
function tabSwitch(item: any, index: any) {
  tabbarValueStore.setValue(index)
  const getItem = items?.value?.[index]
  uni.navigateTo({
    url: getItem.to,
  })
}
</script>

<template>
  <nut-tabbar
    v-model="tabbarValueStore.value"
    :bottom="bottom"
    :unactive-color="unactiveColor"
    :active-color="activeColor"
    :safe-area-inset-bottom="safeAreaInsetBottom"
    :placeholder="placeholder"
    :style="style"
    @tab-switch="tabSwitch"
  >
    <nut-tabbar-item v-for="(item, index) in items" :key="index" :tab-title="item.tabTitle" :icon="item.icon" />
  </nut-tabbar>
</template>
