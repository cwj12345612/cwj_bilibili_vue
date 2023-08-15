// 路由守卫
import static_routes from './static'
import store from '@/store';
import { createRouter,createWebHistory } from "vue-router"; 
const router= createRouter({
    history:createWebHistory(),
    routes:static_routes
})
router.beforeEach((to,from,next)=>{
    // console.log(to.matched);
    //设置当前页面的名字
    if(to.matched[0].name) {
        // console.log(to.matched[0].name)
        store.state.pageconfig.nowpage.name=to.matched[0].name
        // console.log(to.name)
    }
    next()
})
export default router
