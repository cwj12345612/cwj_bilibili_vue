// 静态路由 不用从后台获取
export default [
    {
        path:'/',
        name:'home',
component:()=>import('@/views/home/index.vue')
},
{
    path:'/search/:req',
    name:'search',
    component:()=>import('@/views/search')
}

]