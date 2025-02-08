<template>
  <view
    class="app" :class="{
      dark: isDark,
    }"
  >
    <slot />
    <nut-toast />
  </view>
</template>
