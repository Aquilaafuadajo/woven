export type TableHeader = {
  title: string
  render?: (row: any) => any
}

export type TableColumn = {
  dataIndex: string
  render?: (row: any) => any
}

export type TableConfig = {
  name?: string
  data: any
  tableHeaders?: TableHeader[]
  tableColumns?: TableColumn[]
  onRowClick?: (row: any) => void
}
