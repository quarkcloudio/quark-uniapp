<template>
  <view>
    <view @click="openSwitch">
      {{modelValue ? `${modelValue}` : '请选择'}}
    </view>
    <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="isVisible">
      <nut-picker
        :v-model="modelValue"
        :columns="columns"
        :title="title"
        :cancelText="cancelText"
        :okText="okText"
        :threeDimensional="threeDimensional"
        :swipeDuration="swipeDuration"
        :visibleOptionNum="visibleOptionNum"
        :optionHeight="optionHeight"
        :showToolbar="showToolbar"
        @confirm="confirm"
      >
      </nut-picker>
    </nut-popup>
  </view>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  modelValue?: string;
  columns ?: any;
  title?: string;
  cancelText?: string;
  okText?: string;
  threeDimensional?: boolean;
  swipeDuration?: number | string;
  visibleOptionNum?: number | string;
  optionHeight?: number | string;
  showToolbar?: boolean;
}>()

// 更新父组件
const emit = defineEmits([
  "update:modelValue"
]);

const { modelValue, columns, title, cancelText, okText, threeDimensional, swipeDuration, visibleOptionNum, optionHeight, showToolbar }	= toRefs(props)
const isVisible	= ref(false)

// 打开显示
const openSwitch = () => {
  isVisible.value = true;
};

// 设置选定值
const confirm = ( selectedValue, selectedOptions ) => {
  console.log(selectedOptions)
  emit('update:modelValue',selectedValue)
  isVisible.value = false;
};
</script>

<style lang="scss" ></style>
