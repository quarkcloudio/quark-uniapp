<template>
	<engine :api="api" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useDidShow } from '@tarojs/taro'

const router = useRouter()
let api = ref(router.params?.api)

useDidShow(() => {
  if (router.params?.api !== undefined) {
    api.value = router.params.api
  }
})
</script>

<style lang="scss">
  @import "./index.scss";
</style>
