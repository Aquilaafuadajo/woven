<template>
  <PageWrapper>
    <template #heading>Dashboard</template>
    <template #content>
      <div class="flex flex-col">
        <div class="flex w-full overflow-x-auto">
          <TransactionCard />
          <TransactionCard />
          <AnalyticsCard />
        </div>
        <ul class="flex rounded-xl bg-white px-8 pb-4 pt-[1.88rem] my-6">
          <li
            v-for="tab in tabHeaders"
            :key="tab.key"
            class="flex flex-col justify-center items-center hover:opacity-80"
          >
            <button
              @click="activeTab = tab.key"
              class="text-black-500 font-normal text-sm pb-5 px-5 md:px-10"
              :class="[tab.key === activeTab && 'text-red-700 font-extrabold']"
            >
              {{ tab.name }}
            </button>
            <div v-if="tab.key === activeTab" class="flex bg-red-700 w-full h-1 rounded"></div>
          </li>
        </ul>
        <component :is="tabContents[activeTab]" />
      </div>
    </template>
  </PageWrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageWrapper from '@/components/shared/page-wrapper/PageWrapper.vue'
import TransactionCard from './TransactionCard.vue'
import AnalyticsCard from './AnalyticsCard.vue'
import TransactionTable from './TransactionTable.vue'
import CustomersTable from './CustomersTable.vue'
const activeTab = ref('transactions')
const tabHeaders = [
  {
    name: 'Transactions',
    key: 'transactions'
  },
  {
    name: 'Customers [32]',
    key: 'customers'
  }
]

const tabContents: Record<string, any> = {
  transactions: TransactionTable,
  customers: CustomersTable
}
</script>
