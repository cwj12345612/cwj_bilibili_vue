// 静态路由 不用从后台获取
export default [
    {
        path:'/',
        name:'homepage',
component:()=>import('@/views/home/index.vue')
},
{
    path:'/search',
    name:'searchpage',
    component:()=>import('@/views/search'),
    beforeEnter: (to, from, next) => {
    //   console.log(to.query.text)
       if(!to.query.text||to.query.text.trim()===''){
        alert("url错误");
        next({name:'homepage'})
        return
       }else {
        next()
        return
       }
    }
},
{
    path:'/article',
    name:'articlepage',
    component:()=>import('@/views/article')
}

]