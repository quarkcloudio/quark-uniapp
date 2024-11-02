<script setup lang="ts">
import { onMounted } from 'vue'
import { get } from '@/services/action'

onMounted(() => {
  getLayout()
})

const header = ref('')
const footer = ref('')

async function getLayout() {
  const layout: any = await get({
    url: '/api/miniapp/layout/index/index',
  })
  header.value = layout.header
  footer.value = layout.footer
}
</script>

<template>
  <div
    class="app" :class="{
      dark: isDark,
    }"
  >
    <render :body="header" />
    <slot />
    <render :body="footer" />
  </div>
</template>
