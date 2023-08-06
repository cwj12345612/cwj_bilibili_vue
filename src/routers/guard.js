// 路由守卫
import static_routes from './static'
import store from '@/store';
import { createRouter,createWebHistory } from "vue-router"; 
const router= createRouter({
    history:createWebHistory(),
    routes:static_routes
})
router.beforeEach((to)=>{
    if(to.name) {
        // console.log(to.name)
        store.state.pageconfig.nowpage.name=to.name
        // console.log(to.name)
    }
})
export default router
