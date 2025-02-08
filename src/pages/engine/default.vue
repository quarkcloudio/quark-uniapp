<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const api = ref('')

onLoad((option) => {
  if (option?.api !== undefined)
    api.value = option.api
})
</script>

<template>
  <engine v-if="api" :api="api" />
</template>

<style lang="scss" scoped>
  @import "./index.scss";
</style>
