// 页面相关参数
export default {
   name: 'pageconfig',
   state: {
      windows: {
         clientWidth: 0,
         clientHeight: 0
      },
      header:{
         leftshow:true,
         searchshow:true,
         rightshow:true,
         backgroundColor:'none'
      }
   },
   mutations: {
      // 初始化整个页面的宽度 并监听窗口大小改变
      initWindowsHeightWidth(state) {
         const setWH = () => {
            state.windows.clientWidth = document.getElementById('app').clientWidth
            state.windows.clientHeight = state.windows.clientWidth
         }
         setWH()
         window.addEventListener('resize', () => {
            setWH()
         })
      }
   },
   actions: {

   },
   getters: {

   },
   namespaced: true
}
