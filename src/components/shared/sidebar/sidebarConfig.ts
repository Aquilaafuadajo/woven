import AuditsIcon from '@/assets/icons/AuditsIcon.vue'
import DevelopmentIcon from '@/assets/icons/DevelopmentIcon.vue'
import MandatesIcon from '@/assets/icons/MandatesIcon.vue'
import PayoutsIcon from '@/assets/icons/PayoutsIcon.vue'
import PeopleIcon from '@/assets/icons/PeopleIcon.vue'
import SettlementsIcon from '@/assets/icons/SettlementsIcon.vue'
import SubAccountsIcon from '@/assets/icons/SubAccountsIcon.vue'
import TeamsIcon from '@/assets/icons/TeamsIcon.vue'
import TransactionIcon from '@/assets/icons/TransactionIcon.vue'
import VnuBansIcon from '@/assets/icons/VnuBansIcon.vue'

type SidebarConfig = {
  title: string
  group: {
    title: string
    path: string
    icon: any
    hasMore?: boolean
  }
}[]
export const sidebarConfig: SidebarConfig[] = [
  {
    title: 'payments',
    group: [
      {
        title: 'Transactions',
        icon: TransactionIcon,
        path: '/transactions'
      },
      {
        title: 'People',
        icon: PeopleIcon,
        path: '/people',
        hasMore: true
      },
      {
        title: 'Settlements',
        icon: SettlementsIcon,
        path: '/settlements'
      },
      {
        title: 'Payouts',
        icon: PayoutsIcon,
        path: '/payouts'
      },
      {
        title: 'VNUBANs',
        icon: VnuBansIcon,
        path: '/vnubans'
      },
      {
        title: 'Subaccounts',
        icon: SubAccountsIcon,
        path: '/subaccounts'
      },
      {
        title: 'DD Mandates',
        icon: MandatesIcon,
        path: '/dd-mandates'
      }
    ]
  },
  {
    title: 'others',
    group: [
      {
        title: 'Audit Trails',
        icon: AuditsIcon,
        path: '/audits'
      },
      {
        title: 'Teams',
        icon: TeamsIcon,
        path: '/teams'
      },
      {
        title: 'Development',
        icon: DevelopmentIcon,
        path: '/development'
      }
    ]
  }
]
