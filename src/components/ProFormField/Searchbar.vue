<template>
  <nut-searchbar
    :model="modelValue"
    :label="label"
    :shape="shape"
    :maxLength="maxLength"
    :inputType="inputType"
    :placeholder="placeholder"
    :clearable="clearable"
    :clearIcon="clearIcon"
    :background="background"
    :inputBackground="inputBackground"
    :confirmType="confirmType"
    :autofocus="autofocus"
    :focusStyle="focusStyle"
    :disabled="disabled"
    :readonly="readonly"
    :inputAlign="inputAlign"
    :change="change"
  >
  </nut-searchbar>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  modelValue?: string;
  label?: string;
  shape?: string;
  maxLength?: number;
  inputType?: string;
  placeholder?: string;
  clearable?: boolean;
  clearIcon?: any;
  background?: string;
  inputBackground?: string;
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done';
  autofocus?: boolean;
  focusStyle?: object;
  disabled?: boolean;
  readonly?: boolean;
  inputAlign?: string;
}>()

// 更新父组件
const emit = defineEmits([
  "update:modelValue"
]);

const { 
  modelValue,
  label,
  shape,
  maxLength,
  inputType,
  placeholder,
  clearable,
  clearIcon,
  background,
  inputBackground,
  confirmType,
  autofocus,
  focusStyle,
  disabled,
  readonly,
  inputAlign
}	= toRefs(props)

// 设置选定值
const change = ( value ) => {
  emit('update:modelValue', value)
};
</script>

<style lang="scss" ></style>
