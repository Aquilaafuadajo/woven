<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    :class="[
      rotation === 'left' && 'rotate-left',
      rotation === 'right' && 'rotate-right',
      rotation === 'up' && 'rotate-up',
      rotation === 'down' && ''
    ]"
  >
    <path d="M13 6L8 11L3 6" :stroke="color" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String,
      required: false,
      default: '#646668'
    },
    rotation: {
      type: String,
      required: false,
      default: 'down'
    }
  }
})
</script>

<style scoped>
.rotate-left {
  transform: rotate(90deg);
}
.rotate-up {
  transform: rotate(180deg);
}
.rotate-right {
  transform: rotate(270deg);
}
</style>
