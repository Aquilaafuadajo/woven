<template>
  <div class="bg-white rounded-lg p-10 w-full max-w-[31.8rem] h-max">
    <div class="flex justify-between pb-6 border-b border-b-gray-200">
      <p class="text-black-800 font-medium uppercase text-sm md:text-base">Transaction Logs</p>
      <button class="flex items-center text-xs text-right font-extrabold text-green-400">
        <ResendIcon class="mr-2" />
        Resend callback
      </button>
    </div>
    <div class="my-6 py-[0.62rem] relative">
      <div class="text-left mb-6 pl-6 relative">
        <div class="flex absolute w-2 h-2 bg-orange-400 rounded-full left-0 top-4" />
        <div class="border-l border-l-[#D4D6D8] h-8 w-2 absolute top-[37px] left-1" />
        <p class="font-extrabold text-xs text-black-800 mb-2">Transaction Date</p>
        <p class="text-[0.625rem] md:text-sm font-medium text-black-500">
          Wednesday, March 22nd 2023, 4:03:29 pm
        </p>
      </div>
      <div class="text-left pl-6 relative">
        <div class="flex absolute w-2 h-2 bg-green-400 rounded-full left-0 top-4" />
        <p class="font-extrabold text-xs text-black-800 mb-2">Callback sent Response code: 429</p>
        <p class="text-[0.625rem] md:text-sm font-medium text-black-500">
          Thursday, March 23rd 2023, 2:21:17 am
        </p>
      </div>
    </div>
    <button class="bg-black-50 text-xs text-black-500 font-medium px-10 py-[0.62rem]">
      + { /* Click to view response */ }
    </button>
  </div>
</template>

<script setup lang="ts">
import ResendIcon from '@/assets/icons/ResendIcon.vue'
</script>
