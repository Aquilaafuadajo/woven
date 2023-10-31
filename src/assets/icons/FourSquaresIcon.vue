<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7 3H3V7H7V3Z" :fill="isActive ? '#79242F' : '#4F4F4F'" />
    <path d="M13 3H9V7H13V3Z" :fill="isActive ? '#79242F' : '#4F4F4F'" />
    <path d="M6 10H2V14H6V10Z" :fill="isActive ? '#79242F' : '#4F4F4F'" />
    <path d="M13 9H9V13H13V9Z" :fill="isActive ? '#F9EBED' : '#D4D6D8'" />
    <path
      d="M13 9H9V13H13V9Z"
      :fill="isActive ? '#F9EBED' : '#D4D6D8'"
      :stroke="isActive ? '#79242F' : '#4F4F4F'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 3H3V7H7V3Z"
      :fill="isActive ? '#F9EBED' : '#D4D6D8'"
      :stroke="isActive ? '#79242F' : '#4F4F4F'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 3H9V7H13V3Z"
      :fill="isActive ? '#F9EBED' : '#D4D6D8'"
      :stroke="isActive ? '#79242F' : '#4F4F4F'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 10H2V14H6V10Z"
      :fill="isActive ? '#F9EBED' : '#D4D6D8'"
      :stroke="isActive ? '#79242F' : '#4F4F4F'"
      stroke-linecap="round"
      stroke-linejoin="round"
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
