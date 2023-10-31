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
                <p class="text-sm font-medium text-black-500">
                  Wednesday, March 22nd 2023, 4:03:29 pm
                </p>
              </div>
              <div class="text-right">
                <p class="font-extrabold text-xs text-black-800 mb-2">Status Description</p>
                <p class="text-sm font-medium text-green-400">Successful</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg p-10 w-full max-w-[31.8rem] h-max">
            <div class="flex justify-between pb-6 border-b border-b-gray-200">
              <p class="text-black-800 font-medium uppercase text-sm md:text-base">
                Transaction Logs
              </p>
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
                <p class="font-extrabold text-xs text-black-800 mb-2">
                  Callback sent Response code: 429
                </p>
                <p class="text-[0.625rem] md:text-sm font-medium text-black-500">
                  Thursday, March 23rd 2023, 2:21:17 am
                </p>
              </div>
            </div>
            <button class="bg-black-50 text-xs text-black-500 font-medium px-10 py-[0.62rem]">
              + { /* Click to view response */ }
            </button>
          </div>
        </div>
      </div>
    </template>
  </PageWrapper>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import PageWrapper from '@/components/shared/page-wrapper/PageWrapper.vue'
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'
import CheckIcon from '@/assets/icons/CheckIcon.vue'
import ResendIcon from '@/assets/icons/ResendIcon.vue'

const router = useRouter()
</script>
