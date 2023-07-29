// 页面相关参数
export default {
    name: 'pageconfig',
    state: {
      
        nowpage: {
            name: '',
            isscroll:false,
        }
    },
    mutations: {
        // 设置当前页面路由的name
        setnowpagename(state, name) {
            // console.log('当前页面'+name)
            state.nowpage.name = name
        },
        // 监听当前页面是否滚动
        Listenerisscroll(state){
           
          const scroll=  ()=>{
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                state.nowpage.isscroll=scrollTop!=0
                // console.log(state.nowpage.isscroll)
            }
            scroll()
            window.addEventListener('scroll',()=>{
                // console.log('页面滚动')
                scroll()
            })
           
        }
    },
    actions: {},
    getters: {},
    namespaced: true
}
