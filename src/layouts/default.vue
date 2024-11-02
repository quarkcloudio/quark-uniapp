<script setup lang="ts">
import { get } from '@/services/action'

const header = ref({})
const footer = ref({})

onMounted(() => {
  getLayout()
})

async function getLayout() {
  const layoutUrl = import.meta.env.VITE_LAYOUT_URL
  const layout: any = await get({
    url: layoutUrl,
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
