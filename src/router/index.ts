import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/Layout/index.vue'),
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          component: () => import('@/views/Dashboard/index.vue'),
          name: 'Dashboard',
          meta: {
            title: '工作台',
            icon: 'dashboard',
            affix: true
          }
        },
        {
          path: '/employee',
          component: () => import('@/views/Employee/index.vue'),
          name: 'Employee',
          meta: {
            title: '员工管理',
            icon: 'icon-employee'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
