// 静态路由 不用从后台获取
export default [
    {
        path:'/',
        name:'homepage',
component:()=>import('@/views/homepage/index.vue')
},
{
    path:'/search',
    name:'searchpage',
    component:()=>import('@/views/searchpage')
},
{
    path:'/play',
    name:'playpage',
    component:()=>import('@/views/playpage')
}
]