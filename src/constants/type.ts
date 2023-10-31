export type TransactionType = {
  customer: {
    fullName: string
    email: string
  }
  amount: string
  reference: string
  channel: string
  status: 'fail' | 'success'
  type: string
  createdAt: string
}

export type CustomerType = {
  user: {
    fullName: string
    email: string
  }
  phoneNumber: string
  reference: string
  createdAt: string
}
