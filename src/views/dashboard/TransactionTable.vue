<template>
  <section class="flex w-full overflow-x-scroll">
    <Table
      name="transactions"
      :tableHeaders="tableHeaders"
      :tableColumns="tableColumns"
      :data="transactions"
      :onRowClick="onRowClick"
    />
  </section>
</template>

<script setup lang="tsx">
import { useRouter } from 'vue-router'
import { Table } from '@/components/table/Table.tsx'
import SortIcon from '@/assets/icons/SortIcon.vue'
import { transactions } from '@/constants/data'

// import {TransactionType} from '@/constants/type'

const router = useRouter()

const onRowClick = () => router.push('/transactions/sldkld')
const tableHeaders = [
  { title: 'Customer' },
  { title: 'Amount' },
  { title: 'Reference' },
  { title: 'Channel' },
  {
    render: () => (
      <p class="flex text-xs text-black-400 font-black capitalize">
        Status <SortIcon class="ml-2" />
      </p>
    )
  },
  {
    render: () => (
      <p class="flex text-xs text-black-400 font-black capitalize">
        Type <SortIcon class="ml-2" />
      </p>
    )
  },
  { title: 'Payment Date' }
]
const tableColumns = [
  {
    dataIndex: 'user',
    render: (row: any) => (
      <>
        <p class="text-sm font-black text-black-700">{row.user.fullName}</p>
        <p class="text-sm font-medium text-black-400">{row.user.email}</p>
      </>
    )
  },
  { dataIndex: 'amount' },
  {
    dataIndex: 'reference',
    render: (row: any) => (
      <p class="text-sm font-medium text-black-500 uppercase">{row.reference}</p>
    )
  },
  {
    dataIndex: 'channel',
    render: (row: any) => <p class="text-sm font-medium text-black-500 uppercase">{row.channel}</p>
  },
  {
    dataIndex: 'status',
    render: (row: any) => (
      <p
        class={`text-sm text-center font-medium px-5 py-1.5 rounded w-max capitalize ${
          row.status === 'failed' ? 'text-red-700 bg-red-50' : 'text-green-600 bg-green-100'
        }`}
      >
        {row.status}
      </p>
    )
  },
  {
    dataIndex: 'type',
    render: (row: any) => (
      <p
        class={`text-sm font-medium uppercase ${
          row.type === 'collection' ? 'text-green-600' : 'text-red-700'
        }`}
      >
        {row.type}
      </p>
    )
  },
  { dataIndex: 'createdAt' }
]
</script>
