<template>
  <PageWrapper>
    <template #heading>Transaction Details</template>
    <template #content>
      <div class="flex flex-col">
        <button @click="router.back" class="flex items-center mb-6 w-max">
          <ArrowIcon rotation="left" class="mr-2" /> Back
        </button>
        <p class="text-sm font-medium text-black-700 mb-6">Type: Payout</p>
        <div class="flex flex-col md:flex-row">
          <TrasactionReceipt />
          <TransactionLogs />/
        </div>
      </div>
    </template>
  </PageWrapper>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import PageWrapper from '@/components/shared/page-wrapper/PageWrapper.vue'
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'
import TransactionLogs from './TransactionLogs.vue'
import TrasactionReceipt from './TrasactionReceipt.vue'

const router = useRouter()
</script>
