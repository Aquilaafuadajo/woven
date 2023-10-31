<template>
  <div class="bg-white flex items-center justify-between px-10 py-6">
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
</template>

<script setup lang="ts">
import ToggleIcon from '../../../assets/icons/ToggleIcon.vue'
</script>
