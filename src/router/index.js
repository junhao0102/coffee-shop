import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: () => import('../views/RecruitView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
  ]
})

export default router
