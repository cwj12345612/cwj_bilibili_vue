import store from '@/store'
import num from './number'
export default {
     /**
     * 动态调整盒子高宽
     */
     dynamicsize:(width,heigth)=>{
        const style={}
        const clientWidth=1425
        const clientHeight=1425
       if(width){
        const w=  store.state.pageconfig.windows.clientWidth * (width.normal / clientWidth)
        style.width= num.scopenumber(w,width.max,width.min)+'px'
       }
       if(heigth){
        // console.log(store.state.pageconfig.windows.clientHeight,heigth.normal,clientHeight)
        const h=store.state.pageconfig.windows.clientHeight * (heigth.normal / clientHeight)
        
        style.heigth=num.scopenumber(h,heigth.max,heigth.min)+'px'
        // console.log(style.heigth)
       }
    //    console.log(style)
    // console.log(style)
        return style 
    }
}