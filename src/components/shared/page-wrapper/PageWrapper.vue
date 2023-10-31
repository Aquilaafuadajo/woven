<template>
  <div class="bg-white flex items-center justify-between px-10 py-6">
    <button @click="isMenuOpen = !isMenuOpen" class="md:hidden"><HamburgerIcon /></button>
    <h3 class="text-xl text-black-600 font-black">
      <slot name="heading"></slot>
    </h3>
    <div class="flex items-center">
      <ToggleIcon />
      <p class="ml-3 text-base text-green-500 font-medium">Live Mode</p>
    </div>
  </div>
  <div class="p-8">
    <slot name="content"></slot>
  </div>
  <section v-if="isMenuOpen" class="z-50 absolute lg:hidden drop-shadow-md">
    <Transition name="slide">
      <SideBar @onLinkClick="isMenuOpen = false" />
    </Transition>
  </section>
  <div
    v-show="isMenuOpen"
    class="fixed inset-0 transition-opacity"
    @click="isMenuOpen = false"
  ></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ToggleIcon from '@/assets/icons/ToggleIcon.vue'
import HamburgerIcon from '@/assets/icons/HamburgerIcon.vue'
import SideBar from '../sidebar/SideBar.vue'
const isMenuOpen = ref(false)
</script>

<style scoped>
.slide-enter-active {
  transition: transform 0.3s ease;
}
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
