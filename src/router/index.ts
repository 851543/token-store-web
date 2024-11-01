import { createRouter, createWebHistory } from 'vue-router'
// import { title } from 'process'

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
          path: '/Statistics',
          component: () => import('@/views/Statistics/index.vue'),
          name: 'Statistics',
          meta: {
            title: '数据统计',
            icon: 'icon-statistics'
          }
        },
        {
          path:'/Orders',
          component:() => import('@/views/OrderDetails/index.vue'),
          meta:{
            title:'订单管理',
            icon:'icon-order'
          }
        },
        {
          path:'/Setmeal',
          component:() => import('@/views/Setmeal/index.vue'),
          meta:{
            title:'套餐管理',
            icon:'icon-combo'
          }
        },
        {
          path:'/Dish',
          component:() => import('@/views/Dish/index.vue'),
          meta:{
            title:'菜品管理',
            icon:'icon-dish'
          }
        },
        {
          path:'/Dish/add',
          component:() => import('@/views/Dish/addDishType.vue'),
          meta:{
            title:'添加菜品',
            hidden:true
          }
        },
        {
          path:'/Category',
          component:() => import('@/views/Category/index.vue'),
          meta:{
            title:'分类管理',
            icon:'icon-category'
          }
        },{
          path:'/Employee',
          component:() => import('@/views/Employee/index.vue'),
          meta:{
            title:'员工管理',
            icon:'icon-employee'
          }
        }
        ,{
          path:'/Employee/add',
          component:() => import('@/views/Employee/addEmployee.vue'),
          meta:{
            title:'员工管理',
            hidden:true
          }
        },
        {
          path:'/Setmeal/add',
          component:() => import('@/views/Setmeal/addSetmeal.vue'),
          meta:{
            title:'添加套餐',
            hidden:true
          }
        },
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
