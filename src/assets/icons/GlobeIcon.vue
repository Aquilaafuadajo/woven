<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
      :fill="isActive ? '#F9EBED' : '#D4D6D8'"
    />
    <path
      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
      :stroke="isActive ? '#79242F' : '#4F4F4F'"
      stroke-miterlimit="10"
    />
    <path
      d="M2 8H14"
      :stroke="isActive ? '#79242F' : '#4F4F4F'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 13.8375C9.38071 13.8375 10.5 11.2239 10.5 7.99998C10.5 4.77601 9.38071 2.16248 8 2.16248C6.61929 2.16248 5.5 4.77601 5.5 7.99998C5.5 11.2239 6.61929 13.8375 8 13.8375Z"
      :stroke="isActive ? '#79242F' : '#4F4F4F'"
      stroke-miterlimit="10"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>
