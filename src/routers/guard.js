// 路由守卫
import static_routes from './static'
import  {usepageconfigStore} from '@/pinia/pageconfig'
import { createRouter,createWebHistory } from "vue-router"; 
const router= createRouter({
    history:createWebHistory(),
    routes:static_routes
})
router.beforeEach((to,from,next)=>{
    const pageconfig=usepageconfigStore()
  const list= to.matched
//  list.forEach(li=>{
//   console.log(li.name)
//  })
  let i;
  for( i=list.length,i>=0 ;i--;){
   if(list[i]?.name){  
    // console.log('你好'+list[i].name)
    pageconfig.setpagename(list[i].name)
   }
  }
    next()
})
export default router
