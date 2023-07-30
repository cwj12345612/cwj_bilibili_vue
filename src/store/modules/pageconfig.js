//当前页面相关参数 挂载到vuex
export default {
    state:{
        nowpage:{
            name:undefined,
            width:0,
            height:0,
            scroll:0,

        }
    },
    mutations:{
        //页面加载完成时 获取页面宽度和监听窗口大小变化
        initnowpagewidth(state){
            const setWH = () => {
                state.nowpage.width = document.getElementById('app').clientWidth
                state.nowpage.height = document.getElementById('app').clientHeight
             }
             setWH()
             window.addEventListener('resize', setWH )
        },
        // 监听页面是否滚动
        listenerscroll(state){
            const scroll=  ()=>{
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                state.nowpage.scroll=scrollTop
                // console.log(state.nowpage.scroll)
            }
            scroll()
            window.addEventListener('scroll',scroll)
        }
    },
    actions:{

    },
    getters:{

    },
    name:'pageconfig',
    namespaced: true
  
}