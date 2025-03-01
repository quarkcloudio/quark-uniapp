<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { get } from '~/api/action'

// 组件属性
const props = defineProps<{ api?: string }>()

const { api } = toRefs(props)

// 组件数据
const body = ref({})
// 获取数据
async function getComponents(api: string) {
  const result: any = await get({
    url: api,
  })

  if (!result) {
    uni.showToast({
      title: '接口错误！',
      icon: 'error',
    })
    return
  }

  // 设置标题
  uni.setNavigationBarTitle({
    title: result.title,
  })

  // 设置组件数据
  body.value = result
}

onMounted(() => {
  if (!api?.value) {
    uni.showToast({
      title: '接口不能为空',
      icon: 'error',
    })
  }
  else {
    getComponents(api?.value)
  }
})

onShow(() => {
  if (!api?.value) {
    uni.showToast({
      title: '接口不能为空',
      icon: 'error',
    })
  }
  else {
    getComponents(api?.value)
  }
})
</script>

<template>
  <render :body="body" />
</template>

<style lang="scss"></style>
