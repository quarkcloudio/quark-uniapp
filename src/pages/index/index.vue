<template>
	<engine api="/api/miniapp/page/index/index" />
</template>

<script setup lang="ts">
import { useHelloStore } from "@/stores/hello"

const helloStore = useHelloStore()
console.log(helloStore.helloText)
</script>

<style lang="scss">
  @import "./index.scss";
</style>
