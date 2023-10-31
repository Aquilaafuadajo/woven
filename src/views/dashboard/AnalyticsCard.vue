<template>
  <div class="flex flex-col rounded-xl bg-white p-6 w-full min-w-[24rem] analytic-bg">
    <div class="w-full flex justify-between items-center">
      <p class="text-black-600 text-sm font-medium">Transaction analytics</p>
      <button
        class="flex items-center text-xs text-green-400 font-medium bg-white rounded px-[0.62rem] py-2"
      >
        This week <ArrowIcon color="#188475" rotation="down" class="ml-2" />
      </button>
    </div>
    <div class="flex items-center">
      <div class="relative mr-10">
        <div class="absolute text-center top-[54px] left-[35px]">
          <p class="text-xs font-black text-black-900">1260</p>
          <p class="text-[0.56rem] font-black text-black-900">Transactions</p>
        </div>
        <vue3-chart-js v-bind="{ ...doughnutChart }" />
      </div>
      <div class="flex flex-col">
        <p class="flex items-center text-xs text-black-900 font-medium mb-4">
          <span class="bg-red-700 w-3 h-3 rounded-sm mr-4" />Failed transactions 5%
        </p>
        <p class="flex items-center text-xs text-black-900 font-medium mb-4">
          <span class="bg-green-200 w-3 h-3 rounded-sm mr-4" />Successful transactions 93%
        </p>
        <p class="flex items-center text-xs text-black-900 font-medium">
          <span class="bg-orange-400 w-3 h-3 rounded-sm mr-4" />Pending transactions 2%
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'
const doughnutChart = {
  type: 'doughnut',
  width: 136,
  data: {
    datasets: [
      {
        backgroundColor: ['#EB8B1E', '#A63241', '#4BDECA'],
        data: [13, 23, 93]
      }
    ]
  }
}
</script>
<style scoped>
.analytic-bg {
  background: linear-gradient(241deg, #ccfffa -2.96%, #fffcf5 44.27%, #ffe5e9 89.58%), #fff;
}
</style>
