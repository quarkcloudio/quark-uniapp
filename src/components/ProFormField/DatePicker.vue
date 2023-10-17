<template>
  <view>
    <view @click="openSwitch">
      {{modelValue ? `${modelValue}` : '请选择'}}
    </view>
    <nut-date-picker
      v-model:visible="isVisible"
      :default-value="modelValue"
      :type="type"
      :poppable="poppable"
      :isAutoBackFill="isAutoBackFill"
      :title="title"
      :startDate="startDate"
      :endDate="endDate"
      :showToday="showToday"
      :startText="startText"
      :endText="endText"
      :confirmText="confirmText"
      :showTitle="showTitle"
      :showSubTitle="showSubTitle"
      :toDateAnimation="toDateAnimation"
      :firstDayOfWeek="firstDayOfWeek"
      @close="closeSwitch"
      @choose="setChooseValue"
    >
    </nut-date-picker>
  </view>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  modelValue?: string;
  type ?: string;
  poppable?: boolean;
  isAutoBackFill?: boolean;
  title?: string;
  startDate?: string;
  endDate?: string;
  showToday?: boolean;
  startText?: string;
  endText?: string;
  confirmText?: string;
  showTitle?: boolean;
  showSubTitle?: boolean;
  toDateAnimation?: boolean;
  firstDayOfWeek?: number;
}>()

// 更新父组件
const emit = defineEmits([
  "update:modelValue"
]);

const { modelValue, type, poppable, isAutoBackFill, title, startDate, endDate, showToday, startText, endText, confirmText, showTitle, showSubTitle, toDateAnimation, firstDayOfWeek }	= toRefs(props)
const isVisible	= ref(false)

// 打开显示
const openSwitch = () => {
  isVisible.value = true;
};

// 关闭显示
const closeSwitch = () => {
  isVisible.value = false;
};

// 设置选定值
const setChooseValue = param => {
  emit('update:modelValue',param[3])
};
</script>

<style lang="scss" ></style>
