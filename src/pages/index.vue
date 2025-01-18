<script setup lang="ts">
const defaultUrl = import.meta.env.VITE_DEFAULT_URL
</script>

<template>
  <nut-searchbar
    background="linear-gradient(to right, #9866f0, #eb4d50)"
    input-background="#fff"
  >
    <template #leftin>
      <nut-icon name="search2" />
    </template>
  </nut-searchbar>
  <nut-swiper :init-page="1" :pagination-visible="true" pagination-color="#426543" pagination-unselected-color="#808080" auto-play="3000">
    <nut-swiper-item>
      <img height="180rpx" width="100%" src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="">
    </nut-swiper-item>
    <nut-swiper-item>
      <img height="180rpx" width="100%" src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="">
    </nut-swiper-item>
    <nut-swiper-item>
      <img height="180rpx" width="100%" src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="">
    </nut-swiper-item>
    <nut-swiper-item>
      <img height="180rpx" width="100%" src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="">
    </nut-swiper-item>
  </nut-swiper>
  <engine :api="defaultUrl" />
</template>
