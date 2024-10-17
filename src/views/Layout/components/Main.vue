<script setup lang="ts"></script>
<template>
  <section class="app-main">
    <router-view>
      <transition name="fade-transform" mode="out-in" />
    </router-view>
  </section>
</template>

<style lang="scss" scoped>
.app-main {
  height: calc(100% - 64px);
  overflow-y: auto;
}
</style>
