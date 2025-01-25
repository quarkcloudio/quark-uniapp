<template>
  <div
    class="app" :class="{
      dark: isDark,
    }"
  >
    <slot />
    <nut-toast />
  </div>
</template>
