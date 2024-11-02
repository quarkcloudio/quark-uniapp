<script setup lang="ts">
import { useHelloStore } from '@/stores/hello'

const helloStore = useHelloStore()
console.log(helloStore.helloText)
const defaultUrl = import.meta.env.VITE_DEFAULT_URL
</script>

<template>
  <engine :api="defaultUrl" />
</template>

<style lang="scss"></style>
