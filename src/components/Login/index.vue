<script setup lang="ts">

</script>

<template>
  <nut-form>
    <div center>
      <nut-avatar size="large" bg-color="#fff">
        <image src="/src/static/logo.png" />
      </nut-avatar>
    </div>
    <nut-form-item>
      <nut-input class="nut-input-text" placeholder="请输入用户名" type="text" />
    </nut-form-item>
    <nut-form-item>
      <nut-input class="nut-input-text" placeholder="请输入密码" type="password" />
    </nut-form-item>
    <nut-cell>
      <nut-button block type="primary">
        登录
      </nut-button>
    </nut-cell>
  </nut-form>
</template>

<style lang="scss"></style>
