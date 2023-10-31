<template>
  <div class="flex flex-col rounded-xl bg-white p-6 w-full min-w-[24rem] max-w-[28rem] mr-8">
    <div class="w-full flex justify-between items-center">
      <p class="text-black-600 text-sm font-medium">Total Amount Received</p>
      <button
        class="flex items-center text-xs text-green-400 font-medium bg-green-100 rounded px-[0.62rem] py-2"
      >
        This week <ArrowIcon color="#188475" rotation="down" class="ml-2" />
      </button>
    </div>
    <p class="text-black-600 font-black my-6">
      <span class="text-[2.5rem]">₦27,002,075</span>
      <span class="text-2xl">.65</span>
    </p>
    <button class="border-t border-gray-100 pt-5">
      <p class="flex items-center w-full text-red-300 font-medium text-xs">
        View Transactions <TransactionIcon :isActive="true" class="ml-2" /><ArrowIcon
          color="#C94A5A"
          rotation="right"
          class="ml-auto"
        />
      </p>
    </button>
  </div>
</template>

<script setup lang="ts">
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'
import TransactionIcon from '@/assets/icons/TransactionIcon.vue'
</script>
