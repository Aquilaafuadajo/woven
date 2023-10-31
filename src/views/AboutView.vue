<template>
  <PageWrapper>
    <template #heading>Dashboard</template>
    <template #content>Hello world</template>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '@/components/shared/page-wrapper/PageWrapper.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
