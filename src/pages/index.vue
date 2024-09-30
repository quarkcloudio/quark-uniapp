<script setup lang="ts">
import { useHelloStore } from '@/stores/hello'

const helloStore = useHelloStore()
console.log(helloStore.helloText)
</script>

<template>
  <engine api="/api/miniapp/page/index/index" />
</template>

<style lang="scss"></style>
