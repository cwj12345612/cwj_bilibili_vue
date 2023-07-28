import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    component: () => import('@/views/homepage/index.vue'),
    name: 'homepage',
    meta: {
      title: '首页',
    },

  },
  {
    path: '/article',
    component: () => import('@/views/article')
  },
  {
    path: '/category',
    component: () => import('@/views/category')
  },
  {
    path: '/creative',
    component: () => import('@/views/creativepage')
  },
  {
    path: '/moments',
    component: () => import('@/views/moments')
  },
  {
    path: '/myspace',
    component: () => import('@/views/myspace')
  },
  {
    path: '/play',
    component: () => import('@/views/playpage')
  },
  {
    path: '/search',
    component: () => import('@/views/searchpage')
  },
  {
    path: '/:w+',
   component:()=>import('@/views/error/404.vue')

  }, 

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
