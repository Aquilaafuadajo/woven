import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/people',
      name: 'People',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/settlements',
      name: 'Settlements',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/payouts',
      name: 'Payouts',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/vnubans',
      name: 'VNUBANs',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/subaccounts',
      name: 'Subaccounts',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/dd-mandates',
      name: 'DD Mandates',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/teams',
      name: 'Teams',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/audits',
      name: 'Audits',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/development',
      name: 'Development',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/dashboard/DashboardView.vue')
    },
    {
      path: '/transactions/:id',
      name: 'transaction',
      component: () => import('../views/transaction/TransactionView.vue')
    }
  ]
})

export default router
