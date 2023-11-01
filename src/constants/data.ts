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

export const transactions: TransactionType[] = [
  {
    user: {
      fullName: 'Sharuk Kahn',
      email: 'sharukkibobo@gmail.com'
    },
    amount: '₦27,002,075.65',
    reference: 'wf_py_53_1xyn9myhgrft',
    channel: 'card',
    status: 'failed',
    type: 'payout',
    createdAt: 'March 3, 2023 4:25 PM'
  },
  {
    user: {
      fullName: 'Sharuk Kahn',
      email: 'sharukkibobo@gmail.com'
    },
    amount: '₦27,002,075.65',
    reference: 'wf_py_53_1xyn9myhgrft',
    channel: 'card',
    status: 'successful',
    type: 'collection',
    createdAt: 'March 3, 2023 4:25 PM'
  },
  {
    user: {
      fullName: 'Sharuk Kahn',
      email: 'sharukkibobo@gmail.com'
    },
    amount: '₦27,002,075.65',
    reference: 'wf_py_53_1xyn9myhgrft',
    channel: 'card',
    status: 'failed',
    type: 'payout',
    createdAt: 'March 3, 2023 4:25 PM'
  },
  {
    user: {
      fullName: 'Sharuk Kahn',
      email: 'sharukkibobo@gmail.com'
    },
    amount: '₦27,002,075.65',
    reference: 'wf_py_53_1xyn9myhgrft',
    channel: 'card',
    status: 'failed',
    type: 'collection',
    createdAt: 'March 3, 2023 4:25 PM'
  },
  {
    user: {
      fullName: 'Sharuk Kahn',
      email: 'sharukkibobo@gmail.com'
    },
    amount: '₦27,002,075.65',
    reference: 'wf_py_53_1xyn9myhgrft',
    channel: 'card',
    status: 'successful',
    type: 'payout',
    createdAt: 'March 3, 2023 4:25 PM'
  }
]

export const customers: CustomerType[] = [
  {
    user: {
      fullName: 'Sharuk Kahn',
      email: 'sharukkibobo@gmail.com'
    },
    phoneNumber: '09183746372',
    nuban: '09183746372',
    reference: 'wf_py_53_1',
    createdAt: 'March 3, 2023 4:25 PM'
  },
  {
    user: {
      fullName: 'Sharuk Kahn',
      email: 'sharukkibobo@gmail.com'
    },
    phoneNumber: '09183746372',
    nuban: '09183746372',
    reference: 'wf_py_53_1',
    createdAt: 'March 3, 2023 4:25 PM'
  },
  {
    user: {
      fullName: 'Sharuk Kahn',
      email: 'sharukkibobo@gmail.com'
    },
    phoneNumber: '09183746372',
    nuban: '09183746372',
    reference: 'wf_py_53_1',
    createdAt: 'March 3, 2023 4:25 PM'
  },
  {
    user: {
      fullName: 'Sharuk Kahn',
      email: 'sharukkibobo@gmail.com'
    },
    phoneNumber: '09183746372',
    nuban: '09183746372',
    reference: 'wf_py_53_1',
    createdAt: 'March 3, 2023 4:25 PM'
  },
  {
    user: {
      fullName: 'Sharuk Kahn',
      email: 'sharukkibobo@gmail.com'
    },
    phoneNumber: '09183746372',
    nuban: '09183746372',
    reference: 'wf_py_53_1',
    createdAt: 'March 3, 2023 4:25 PM'
  }
]
