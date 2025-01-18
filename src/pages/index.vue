<script setup lang="ts">
// const defaultUrl = import.meta.env.VITE_DEFAULT_URL
</script>

<template>
  <div style="background-color: #f6f6f6;" h-dvh>
    <nut-searchbar
      background="#ff5454"
      input-background="#fff"
    >
      <template #leftin>
        <nut-icon name="search2" />
      </template>
    </nut-searchbar>
    <div pb-.3rem pl-.5rem pr-.5rem pt-.3rem style="background: linear-gradient(180deg, #ff5454 .63%, #f4f4f4 80.65%);">
      <nut-swiper :init-page="1" :pagination-visible="true" pagination-color="#426543" pagination-unselected-color="#808080" auto-play="3000">
        <nut-swiper-item>
          <img h-10rem overflow-hidden rounded-2xl width="100%" src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="">
        </nut-swiper-item>
        <nut-swiper-item>
          <img h-10rem overflow-hidden rounded-2xl width="100%" src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="">
        </nut-swiper-item>
      </nut-swiper>
    </div>
    <nut-noticebar
      pl-.5rem pr-.5rem
      text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
      background="rgba(251, 248, 220, 1)"
      custom-color="#D9500B"
    />
  </div>
</template>
