import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
 {
  path:'/',
  component:()=>import('@/views//index/index.vue'),
  meta:{
    title:'主页'
  }
 },
 {
  path:'/search',
  component:()=>import('@/views/search'),
  meta:{
    title:'搜索结果'
  }
 },
 {
  path:'/play',
  component:()=>import('@/views/play'),
  meta:{
    title:'播放页面'
  }
 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
