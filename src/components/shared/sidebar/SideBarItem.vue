<template>
  <RouterLink :to="to" custom v-slot="{ href, navigate, isActive, isExactActive }">
    <li class="mb-6 sidebar-item">
      <a
        :href="href"
        @click="navigate"
        :class="[
          'flex items-center border-l-4 border-b-2 border-t-2 border-r-2 rounded border-transparent sidebar-item text-black-500 font-medium text-xs pl-3',
          isActive && 'router-link-active',
          isExactActive && 'router-link-exact-active'
        ]"
      >
        <component :is="iconComponent" :isActive="isActive" class="mr-2" />
        {{ label }}
      </a>
    </li>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const { to, label, iconComponent } = defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  iconComponent: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
a.router-link-exact-active {
  color: #79242f;
  border-left-color: #79242f;
}
.sidebar-item:hover {
  opacity: 0.9;
}
</style>
