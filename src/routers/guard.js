// 路由守卫
import static_routes from './static'

import { createRouter,createWebHistory } from "vue-router"; 
const router= createRouter({
    history:createWebHistory(),
    routes:static_routes
})
router.beforeEach((to,from,next)=>{
  
    next()
})
export default router
