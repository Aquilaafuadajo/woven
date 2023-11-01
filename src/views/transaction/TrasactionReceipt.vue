<template>
  <div class="bg-white rounded-lg p-10 w-full max-w-[31.8rem] mr-8 mb-8 md:mb-0">
    <div class="flex justify-between pb-6 border-b border-b-gray-200">
      <p class="flex items-center text-black-900 text-sm md:text-base">
        <CheckIcon class="mr-2" />8012682284
      </p>
      <div class="text-right">
        <p class="font-extrabold text-xs text-black-800 mb-2">Amount</p>
        <p class="text-base font-medium text-black-500">₦100.00</p>
      </div>
    </div>
    <div class="flex justify-between py-6 border-b border-b-gray-200">
      <div class="text-left">
        <p class="font-extrabold text-xs text-black-800 mb-2">Customer Reference</p>
        <p class="text-sm font-medium text-black-500">53</p>
      </div>
      <div class="text-right">
        <p class="font-extrabold text-xs text-black-800 mb-2">Customer Name</p>
        <p class="text-sm font-medium text-black-500">Gamma Spark Updated</p>
      </div>
    </div>
    <div class="flex justify-between py-6 border-b border-b-gray-200">
      <div class="text-left">
        <p class="font-extrabold text-xs text-black-800 mb-2">Source Account</p>
        <p class="text-sm font-medium text-black-500">
          CORONATION MERCHANT BANK <br />
          Load Test Account
        </p>
      </div>
      <div class="text-right">
        <p class="font-extrabold text-xs text-black-800 mb-2">Settlement Account</p>
        <p class="text-sm font-medium text-black-500">Not Available</p>
      </div>
    </div>
    <div class="flex justify-between pt-6">
      <div class="text-left">
        <p class="font-extrabold text-xs text-black-800 mb-2">Transaction Date</p>
        <p class="text-sm font-medium text-black-500">Wednesday, March 22nd 2023, 4:03:29 pm</p>
      </div>
      <div class="text-right">
        <p class="font-extrabold text-xs text-black-800 mb-2">Status Description</p>
        <p class="text-sm font-medium text-green-400">Successful</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckIcon from '@/assets/icons/CheckIcon.vue'
</script>
