import { createRouter, createWebHistory } from 'vue-router'
import AtrributeConditinalView from '../views/AtrributeConditinalView.vue'
import ListRendering from '../views/ListRendering.vue'
import LifeCycle from '../views/LifeCycle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AttributeBiding-ConditionalRending',
      component: AtrributeConditinalView,
    },
    {
      path: '/list-rendering',
      name: 'List Rendering',
      component: ListRendering
    },
    {
      path: '/life-cycle',
      name: 'Life cycle',
      component: LifeCycle
    },
    {
      path:'/users',
      name:'Users',
      component:()=>import('../views/Users.vue')
    },
    {
      path:'/users/:id',
      name:'UserDetail',
      component:()=>import('../views/UserDetail.vue')
    }
  ]
})

export default router
