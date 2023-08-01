// 静态路由 不用从后台获取
export default [
    {
        path:'/',
        name:'homepage',
component:()=>import('@/views/home/index.vue')
},
{
    path:'/search/:req',
    name:'searchpage',
    component:()=>import('@/views/search')
},
{
    path:'/article',
    name:'articlepage',
    component:()=>import('@/views/article')
}

]