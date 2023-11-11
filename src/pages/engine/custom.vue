<template>
  <engine :api="api" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

let api = ref("")

onLoad((option) => {
  if (option?.api !== undefined) {
    api.value = option.api
  }
})
</script>

<style lang="scss">
  @import "./index.scss";
</style>
