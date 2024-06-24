import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '@/ui/pages/home/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
