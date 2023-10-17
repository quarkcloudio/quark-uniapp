<template>
  <nut-row :style="style" :type="type" :gutter="gutter" :justify="justify" :align="align" :flexWrap="flexWrap">
    <nut-col v-for="item in body" :style="item.style" :span="item.span" :offset="item.offset">
      <render :body="item.body" :data="data" :callback="callback" />
    </nut-col>
  </nut-row>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  type?: string,
  gutter?: string | number,
  justify?: string,
  align?: string,
  flexWrap?: string,
  style?: any,
  body?: Array<any>,
  data?: string | number | object,
  callback?: Function | object,
}>()

const { type, gutter, justify, align, flexWrap, style, body, data, callback }	= toRefs(props)
</script>

<style lang="scss" ></style>
