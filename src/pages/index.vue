<script setup lang="ts">
const defaultUrl = import.meta.env.VITE_DEFAULT_URL
</script>

<template>
  <engine :api="defaultUrl" />
</template>
