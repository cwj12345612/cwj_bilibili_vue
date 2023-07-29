import {createRouter, createWebHashHistory} from 'vue-router'
import store from '@/store/index.js'
// const store=useStore()
import routes from "./static.js";
import dynamic from './dynamic.js'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...routes, ...dynamic]
})

router.beforeEach((to, from, next) => {
    // console.log("前置路由守卫"+to.name)
    // console.log(to)
    // 设置当前路由name到vuex
    if (to.name) {
        store.commit('pageconfig/setnowpagename', to.name)
    }
    //监听页面是否滚动
    store.commit('pageconfig/Listenerisscroll')
    next()
})

export default router