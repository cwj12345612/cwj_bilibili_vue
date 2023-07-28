//默认路由

export default [

    {
        path: '/',
        component: () => import('@/views/homepage/index.vue'),
        name: 'homepage',
        meta: {
            title: '首页',
        },

    },
    {
        path: '/article',
        name: 'article',
        component: () => import('@/views/article')
    },
    {
        path: '/category',
        name: 'category',
        component: () => import('@/views/category')
    },
    {
        path: '/creative',
        name: 'creative',
        component: () => import('@/views/creativepage')
    },
    {
        path: '/moments',
        name: 'moments',
        component: () => import('@/views/moments')
    },
    {
        path: '/myspace',
        name: 'myspace',
        component: () => import('@/views/myspace')
    },
    {
        path: '/play',
        name: 'play',
        component: () => import('@/views/playpage')
    },
    {
        path: '/search',
        component: () => import('@/views/searchpage')
    },
    {
        path: '/:w+',
        name: '*',
        component: () => import('@/views/error/404.vue')

    },
]
