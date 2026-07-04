import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [
        { path: '', name: 'home', component: () => import('@/pages/HomePage.vue') },
      ],
    },
    {
      path: '/auth',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        { path: 'login', name: 'login', component: () => import('@/pages/auth/LoginPage.vue') },
        { path: 'register', name: 'register', component: () => import('@/pages/auth/RegisterPage.vue') },
        { path: 'forgot-password', name: 'forgot-password', component: () => import('@/pages/auth/ForgotPasswordPage.vue') },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
