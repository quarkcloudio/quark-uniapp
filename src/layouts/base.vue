<template>
  <div
    class="app" :class="{
      dark: isDark,
    }"
  >
    <slot />
  </div>
</template>
