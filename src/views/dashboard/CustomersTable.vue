<template>
  <section class="flex w-full overflow-x-scroll">
    <Table
      name="customers"
      :tableHeaders="tableHeaders"
      :tableColumns="tableColumns"
      :data="customers"
    />
  </section>
</template>

<script setup lang="tsx">
import { Table } from '@/components/table/Table'
import { customers } from '@/constants/customers'
import type { TableColumn, TableHeader } from '@/types/table.type'

const tableHeaders: TableHeader[] = [
  { title: 'Customer' },
  { title: 'Phone' },
  { title: 'Nuban' },
  { title: 'Reference' },
  { title: 'Date Created' }
]
const tableColumns: TableColumn[] = [
  {
    dataIndex: 'user',
    render: (row: any) => (
      <>
        <p class="text-sm font-black text-black-700">{row.user.fullName}</p>
        <p class="text-sm font-medium text-black-400">{row.user.email}</p>
      </>
    )
  },
  { dataIndex: 'phoneNumber' },
  { dataIndex: 'nuban' },
  {
    dataIndex: 'reference',
    render: (row: any) => (
      <p class="text-sm font-medium text-black-500 uppercase">{row.reference}</p>
    )
  },
  { dataIndex: 'createdAt' }
]
</script>
