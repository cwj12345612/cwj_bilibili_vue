// 页面相关参数
export default {
    name: 'pageconfig',
    state: {
        windows: {
            clientWidth: 0,
            clientHeight: 0
        },
        nowpage: {
            name: '',

        }
    },
    mutations: {
        setnowpagename(state, name) {
            // console.log('当前页面'+name)
            state.nowpage.name = name
        }
    },
    actions: {},
    getters: {},
    namespaced: true
}
