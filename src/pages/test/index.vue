<template>
  <nut-grid :column-num="5">
    <nut-grid-item text="餐饮美食"><Dongdong /></nut-grid-item>
    <nut-grid-item text="休闲娱乐"><Dongdong /></nut-grid-item>
    <nut-grid-item text="生活服务"><Dongdong /></nut-grid-item>
    <nut-grid-item text="鲜花蛋糕"><Dongdong /></nut-grid-item>
    <nut-grid-item text="旅游酒店"><Dongdong /></nut-grid-item>
  </nut-grid>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Home, Category, My, Search2, Dongdong } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro'
export default {
  name: 'Index',
  components: {
    Home,
    Category,
    My,
    Search2,
    Dongdong
  },
  setup() {
    const state = reactive({
      type: 'text',
      show: false,
    });

    return {
      ...toRefs(state),
      Home,
      Category,
      My,
      Dongdong
    }
  }
}
</script>

<style lang="scss">
  @import "./index.scss";
</style>
