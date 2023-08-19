// 静态路由 不用从后台获取
export default [
    {
        path:'/',
        name:'homepage',
component:()=>import('@/views/homepage/index.vue')
},

]