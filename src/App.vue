<template>
  <main class="w-full flex">
    <section class="hidden lg:block">
      <SideBar />
    </section>
    <section class="flex flex-col flex-1 h-screen overflow-y-scroll">
      <RouterView />
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/shared/sidebar/SideBar.vue'
</script>

<style scoped></style>
