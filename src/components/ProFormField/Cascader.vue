<template>
    <view>
      <view @click="isVisible = true">
        {{getOptionText() ? `${getOptionText()}` : '请选择'}}
      </view>
      <nut-cascader
        :model="modelValue"
        v-model:visible="isVisible"
        :options="options"
        :valueKey="valueKey"
        :textKey="textKey"
        :childrenKey="childrenKey"
        :convertConfig="convertConfig"
        :title="title"
        :closeIconPosition="closeIconPosition"
        :closeable="closeable"
        :poppable="poppable"
        @change="change"
      >
      </nut-cascader>
    </view>
  </template>
  
  <script setup lang="ts">
  import { ref, toRefs } from 'vue'
  
  // 组件属性
  const props = defineProps<{
    modelValue?: Array<string>;
    options ?: Array<any>;
    valueKey?: string;
    textKey?: string;
    childrenKey?: string;
    convertConfig?: object;
    title?: string;
    closeIconPosition?: string;
    closeable?: boolean;
    poppable?: boolean;
  }>()
  
  // 更新父组件
  const emit = defineEmits([
    "update:modelValue"
  ]);
  
  const { modelValue, options, valueKey, textKey, childrenKey, convertConfig, title, closeIconPosition, closeable, poppable }	= toRefs(props)
  const isVisible	= ref(false)
  
  // 设置选定值
  const change = param => {
    emit('update:modelValue', param)
  };

  // 设置属性文案
  const getOptionText = () => {
    let optionText = ""
    modelValue?.value?.map((mv) => {
      options?.value?.map((ov) => {
        if(mv == ov.value) {
          optionText = ov.text+","
        }
      });
    })

    return optionText.replace(/,$/, '')
  };
  </script>
  
  <style lang="scss" ></style>
  