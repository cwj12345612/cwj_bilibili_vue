import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
 {
  path:'/',
  component:()=>import('@/views//index/index.vue'),
  meta:{
    title:'主页'
  }
 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
