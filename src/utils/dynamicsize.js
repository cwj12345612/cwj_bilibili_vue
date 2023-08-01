//动态调整页面盒子的css样式
import store from "@/store"
import  {computed,reactive,ref} from 'vue'
const scrollTop=ref(2)

import num from "./num"
export default {
    /**
     *动态调整盒子的高宽  
     @param {*} width:{normal,max,min}
     @param {*} height:{normal,max,min}
     */
    dynamicWH(width,height){
        const maxwidth=1425
        const maxheight=1425
       return computed(()=>{
     
        const style={}
        if(width){
            // console.log(JSON.stringify(width))
           const w=store.state.pageconfig.nowpage.width * (width.normal /maxwidth )
            style.width=num.scopenum(w,width.max,width.min)+'px'
        }
        if(height) {
            // console.log(JSON.stringify(height),store.state.pageconfig.nowpage.width)
            const h=store.state.pageconfig.nowpage.height * (height.normal /maxheight )
            style.height=num.scopenum(h,height.max,height.min)+'px'
        }
        // console.log('计算属性'+JSON.stringify(style))
        // console.log("*********************")
     
        return style
       })
    },
    dynamicPadding(){

    },

    dynamicClass(){
       
    const ca= computed(()=>{
        const ca={}
          const name= store.state.pageconfig.nowpage.name
        // console.log(name)
        ca[name]=name
       if(scrollTop.value!=0) {
        ca.scroll='scroll'
       }else {
        ca.scroll=null
       }
       
       return ca;
     })
     console.log(ca)
     return ca
    }
}
