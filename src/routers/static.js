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
},
{
    path:'/space',
    name:'spacepage',
    redirect:'/space/home',
    component:()=>import('@/views/space'),
    children:[
        {
            path:'home',
            component:()=>import('@/views/space/home')
        },
        {
            path:'favorite',
            component:()=>import('@/views/space/favorite')
        },
       
    ]
}

]