import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  
 {
    path:'/',
  component:()=>import('@/views/homepage/index.vue'),
  name:'homepage',
  meta:{
    title:'首页',
  },
  
  
 },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
