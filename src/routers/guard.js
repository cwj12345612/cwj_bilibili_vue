// 路由守卫
import static_routes from './static'
import  {usepageconfigStore} from '@/pinia/pageconfig'
import { createRouter,createWebHistory } from "vue-router"; 
const router= createRouter({
    history:createWebHistory(),
    routes:static_routes
})
router.beforeEach((to,from,next)=>{
    // console.log(to.name)
    if(to.name){
        const pageconfig=usepageconfigStore()
        pageconfig.pagename=to.name
    }
    next()
})
export default router
