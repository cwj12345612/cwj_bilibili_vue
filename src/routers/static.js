// #region 开发文档路由 正常使用时删除
const dev = [
    {
        path: '/admindev',
        name: 'admindev',
        component: () => import('@/AdiminDev')
    }
]
//  #endregion

//#region   静态路由 不用从后台获取

const main = [
    {
        path: '/',
        name: 'homepage',
        component: () => import('@/views/homepage/index.vue')
    },
    {
        path: '/search',
        name: 'searchpage',
        component: () => import('@/views/searchpage')
    },
    {
        path: '/play',
        name: 'playpage',
        component: () => import('@/views/playpage')
    },

]
const category = [
    {
        path: '/movie',
        name: 'moviepage',
        component: () => import('@/views/category/moviepage')
    },
    {
        path: '/anime',
        name: 'animepage',
        component: () => import('@/views/category/animationpage')
    }
]
const space = {
    path: '/space',
    name: 'spacepage',
    redirect: { name: 'spacepage_home' },
    component: () => import('@/views/space'),
    children: [
        {
            path: 'home',
            name: 'spacepage_home',
            component: () => import('@/views/space/routespage/home')
        },
        {
            path: 'contribute',
            component: () => import('@/views/space/routespage/contribute'),
            redirect: { name: 'contribute_video' },
            children: [


                {
                    name: 'contribute_video',
                    path: 'video',
                    component: () => import('@/views/space/routespage/contribute/video.vue')
                },
                {
                    path: 'audio',
                    component: () => import('@/views/space/routespage/contribute/audio.vue')
                },
                {
                    path: 'article',
                    component: () => import('@/views/space/routespage/contribute/article.vue')
                },
                {
                    path: 'album',
                    component: () => import('@/views/space/routespage/contribute/album.vue')
                }
            ]
        },
        {
            path: 'dynamic',
            component: () => import('@/views/space/routespage/dynamic')
        },
        {
            path: 'compilations',
            component: () => import('@/views/space/routespage/compilations')
        },
        {
            path: 'favlist',
            component: () => import('@/views/space/routespage/favlist'),
            redirect:{name:'favlist_default'},
            children:[
                {
                    path:'default',
                    name:'favlist_default',
                    component:()=>import('@/views/space/routespage/favlist/createcard.vue')
                },
               {
                path:':id',
                component:()=>import('@/views/space/routespage/favlist/createcard.vue')
            
               }
            ],
        },
        {
            path: 'subscription',
            component: () => import('@/views/space/routespage/subscription')
        },
        {
            path: 'setting',
            component: () => import('@/views/space/routespage/setting')
        },

    ]
}
//#endregion


const routes = [
    ...main,
    ...category,
    space,
    ...dev
]
export default routes
