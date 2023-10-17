<template>
  <nut-grid :style="style" :columnNum="columnNum" :border="border" :gutter="gutter" :center="center" :square="square" :reverse="reverse" :direction="direction" :clickable="clickable">
    <nut-grid-item v-for="item in body" :style="item.style" :text="item.text">
      <render :body="item.body" :data="data" :callback="callback" />
    </nut-grid-item>
  </nut-grid>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  columnNum?: string | number,
  border?: boolean,
  gutter?: string | number,
  center?: boolean,
  square?: boolean,
  reverse?: boolean,
  direction?: 'horizontal' | 'vertical',
  clickable?: boolean,
  style?: any,
  body?: any,
  data?: any,
  callback?: Function | object,
}>()

const { columnNum, border, gutter, center, square, reverse, direction, clickable, style, body, data, callback }	= toRefs(props)
</script>

<style lang="scss" ></style>
