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
           
        },
        // 初始化整个页面的宽度 并监听窗口大小改变
      initWindowsHeightWidth(state) {
        
        const setWH = () => {
           state.windows.clientWidth = document.getElementById('app').clientWidth
           state.windows.clientHeight = state.windows.clientWidth
            // console.log(state.windows.clientWidth)
        }
        setWH()
        window.addEventListener('resize', () => {
           setWH()
        })
     }
    },
    actions: {},
    getters: {},
    namespaced: true
}
