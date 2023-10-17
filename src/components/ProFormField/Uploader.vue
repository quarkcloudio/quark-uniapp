<template>
  <nut-uploader
    :autoUpload="autoUpload"
    :name="name"
    :url="url"
    :v-model:file-list="modelValue"
    :isPreview="isPreview"
    :isDeletable="isDeletable"
    :method="method"
    :listType="listType"
    :maximize="maximize"
    :maximum="maximum"
    :sourceType="sourceType"
    :camera="camera"
    :sizeType="sizeType"
    :mediaType="mediaType"
    :maxDuration="maxDuration"
    :headers="headers"
    :data="data"
    :xhrState="xhrState"
    :disabled="disabled"
    :multiple="multiple"
    :timeout="timeout"
    :beforeXhrUpload="beforeXhrUpload"
    @change="change"
  >
    <nut-button type="success" size="small">上传文件</nut-button>
  </nut-uploader>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

// 组件属性
const props = defineProps<{
  modelValue?: string;
  autoUpload?: boolean;
  name?: string;
  url?: string;
  isPreview?: boolean;
  isDeletable?: boolean;
  method?: string;
  listType?: string;
  maximize?: number | string;
  maximum?: number | string;
  sourceType?:Array<any>;
  camera?: string;
  sizeType?: Array<any>;
  mediaType?: Array<any>;
  maxDuration?: number;
  headers?: any;
  data?: any;
  xhrState?: number;
  disabled?: boolean;
  multiple?: boolean;
  timeout?: number | string;
  beforeXhrUpload?: any;
}>()

// 更新父组件
const emit = defineEmits([
  "update:modelValue"
]);

const { 
  modelValue,
  autoUpload,
  name,
  url,
  isPreview,
  isDeletable,
  method,
  listType,
  maximize,
  maximum,
  sourceType,
  camera,
  sizeType,
  mediaType,
  maxDuration,
  headers,
  data,
  xhrState,
  disabled,
  multiple,
  timeout,
  beforeXhrUpload
}	= toRefs(props)

// 设置选定值
const change = ( value ) => {
  emit('update:modelValue', value)
};
</script>

<style lang="scss" ></style>
