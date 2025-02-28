import { createRouter, createWebHistory } from 'vue-router'
import hidModeView from '../views/hidModeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HID Scanner',
      component: hidModeView,
    },
    {
      path: '/usbModeView',
      name: 'USB Scanner',
      // route level code-splitting
      // this generates a separate chunk (usbModeView.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/usbModeView.vue'),
    },
  ],
})

export default router
