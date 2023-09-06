

//#region   静态路由 不用从后台获取

const main= [
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
},

]
const category=[
    {
        path:'/movie',
        name:'moviepage',
        component:()=>import('@/views/category/moviepage')
    },
    {
        path:'/anime',
        name:'animepage',
        component:()=>import('@/views/category/animationpage')
    }
]
const spacepage={
    path:'/space',
    name:'spacepage',
    component:()=>import('@/views/space')
}
//#endregion

// #region 开发文档路由 正常使用时删除
const dev=[
    {
        path:'/admindev',
        name:'admindev',
        component:()=>import('@/AdiminDev')
    }
]
//  #endregion
const routes=[
    ...main,
    ...category,
    spacepage,
    ...dev
]
export default routes
