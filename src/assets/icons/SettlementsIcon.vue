<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2.10006 9.1C2.03185 8.73734 1.99836 8.36901 2.00006 8C1.99927 6.75912 2.38363 5.54858 3.10011 4.53544C3.81658 3.52231 4.82984 2.75651 6.00006 2.34375V6.84375L2.10006 9.1Z"
      :fill="isActive ? '#F9EBED' : '#D4D6D8'"
    />
    <path
      d="M8 8V2"
      :stroke="isActive ? '#79242F' : '#4F4F4F'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.1937 5L2.80615 11"
      :stroke="isActive ? '#79242F' : '#4F4F4F'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.10006 9.1C2.03185 8.73734 1.99836 8.36901 2.00006 8C1.99927 6.75912 2.38363 5.54858 3.10011 4.53544C3.81658 3.52231 4.82984 2.75651 6.00006 2.34375V6.84375L2.10006 9.1Z"
      :stroke="isActive ? '#79242F' : '#4F4F4F'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.99995 2C9.0513 2.00012 10.0842 2.27649 10.9951 2.80143C11.906 3.32638 12.663 4.08146 13.1902 4.99105C13.7175 5.90064 13.9965 6.9328 13.9993 7.98415C14.002 9.0355 13.7285 10.0691 13.2061 10.9815C12.6836 11.8938 11.9306 12.6529 11.0225 13.1827C10.1144 13.7124 9.08298 13.9942 8.03165 13.9999C6.98031 14.0056 5.94594 13.7349 5.03214 13.215C4.11834 12.6951 3.3572 11.9442 2.82495 11.0375"
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
