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
  
},
{
path:'/play',
name:'playpage',
component:()=>import('@/views/play')
},

{
    path:'/article',
    name:'articlepage',
    component:()=>import('@/views/article')
}

]