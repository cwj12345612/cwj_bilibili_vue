// 页面相关参数
export  default {
   name:'pageconfig',
    state: {
       global:{
         clientWidth:document.getElementById('app').clientWidth
       }
    },
    mutations: {
          // 初始化整个页面的宽度 并监听窗口大小改变
          initglobaloffsetWidth(state){
            // console.log(document.getElementById('app').clientWidth)
            // console.log(state.global.clientWidth)
               state.global.clientWidth=document.getElementById('app').clientWidth
               window.addEventListener('resize',()=>{
                  state.global.clientWidth=document.getElementById('app').clientWidth
               })
          }
    },
    actions: {
    
    },
    getters: {
      
    },
    namespaced:true
}
