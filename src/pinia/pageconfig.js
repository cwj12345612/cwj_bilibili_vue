import { defineStore } from 'pinia'

export const usepageconfigStore= defineStore('pageconfigStore',{
    state:()=>({
          // 页面滚动距离
          scroll: 0,
          // 页面宽度
          width: 0,
          // 页面高度 自定义和宽度相等
          height: 0
    }),
    actions:{
          // 初始化页面宽度高度等 并监听对应js事件
        //app组件挂载后调用
        initproperty() {
            // console.log('初始化页面')
            this.width = document.querySelector('#app').clientWidth
            this.height = this.width
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop
            window.addEventListener('scroll', () => this.scroll = document.documentElement.scrollTop || document.body.scrollTop)
            window.addEventListener('resize', () => {
                this.width = document.querySelector('#app').clientWidth
                this.height = this.width
            })
        }
    },
    getters:{
       /**
        * 动态设置元素高度和宽度
        * @returns 高度height 宽度width (非必须)
        */
     dynamicWH(){
        const normalWidth=1425
        const normalHeight=1425
        return (width,height)=>{
            // {normal: , max:  ,min: ,}
            const style={}
            if(width){
               const factor=width.normal / normalWidth
               const temp=factor * this.width
               if(temp>width.max)
               {
                style.width=width.max
               }else if(temp<width.min){
                style.width=width.min
               }else{
                style.width=temp
               }
               style.width=style.width+'px'
            }
            if(height){
                const factor=height.normal / normalHeight
                const temp=factor * this.height
                if(temp>height.max)
                {
                 style.height=height.max
                }else if(temp<height.min){
                 style.height=height.min
                }else{
                 style.height=temp
                }
                style.height=style.height+'px'
            }
            console.log(JSON.stringify(style))
            return style
        }
    }
    }
})