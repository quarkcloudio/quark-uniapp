<template>
  <div
    class="app" :class="{
      dark: isDark,
    }"
  >
    <main
      p="x-4 y-10"
      font-sans text="center"
      color="gray-700 dark:gray-200"
    >
      <slot />
    </main>
  </div>
</template>
