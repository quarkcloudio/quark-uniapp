<template>
  <div flex="~ gap-4" mt-5 justify-center text-xl>
    <div title="Home" @click="router.replace('/pages/index')">
      首页
    </div>

    <div title="SubPages" @click="router.push('/pages-sub/index')">
      子页面
    </div>

    <div icon-btn title="Toggle dark mode" @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </div>
  </div>
</template>
