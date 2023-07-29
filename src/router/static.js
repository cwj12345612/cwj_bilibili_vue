//默认路由

export default [
    // .articlepage,
    // .creativepage,
    // .errorpage,
    // .momentspage,
    // .myspacepage,
    // .playpage,
    // .searchpage,
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
        name: 'articlepage',
        component: () => import('@/views/article')
    },
    {
        path: '/category',
        name: 'creativepage',
        component: () => import('@/views/category')
    },
    {
        path: '/creative',
        name: 'creative',
        component: () => import('@/views/creativepage')
    },
    {
        path: '/moments',
        name: 'momentspage',
        component: () => import('@/views/moments')
    },
    {
        path: '/myspace',
        name: 'myspacepage',
        component: () => import('@/views/myspace')
    },
    {
        path: '/play',
        name: 'playpage',
        component: () => import('@/views/playpage')
    },
    {
        path: '/search',
        name:'searchpage',
        component: () => import('@/views/searchpage')
    },
    {
        path: '/:w+',
        name: 'errorpage',
        component: () => import('@/views/error/404.vue')

    },
]
