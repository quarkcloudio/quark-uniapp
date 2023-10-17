<template>
  <view>
    <view @click="click">
      {{modelValue ? `${modelValue}` : '请输入'}}
    </view>
    <nut-short-password
      :v-model="modelValue"
      :v-model:visible="isVisible"
      :title="title"
      :desc="desc"
      :tips="tips"
      :closeOnClickOverlay="closeOnClickOverlay"
      :length="length"
      :errorMsg="errorMsg"
      @close="close"
      @complete="complete"
    >
    </nut-short-password>
  </view>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  modelValue?: string;
  title?: string;
  desc?: string;
  tips?: string;
  closeOnClickOverlay?: boolean;
  length?: number | string;
  errorMsg?: string;
}>()

// 更新父组件
const emit = defineEmits([
  "update:modelValue"
]);

const { modelValue, title, desc, tips, closeOnClickOverlay, length, errorMsg }	= toRefs(props)
const isVisible	= ref(false)

// 打开显示
const click = () => {
  isVisible.value = true;
};

// 设置选定值
const close = () => {
  isVisible.value = false;
};

// 设置选定值
const complete = (val) => {
  emit('update:modelValue',val)
  isVisible.value = false;
};
</script>

<style lang="scss" ></style>
