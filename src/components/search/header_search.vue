<template>
<div class='header_search'
:style="style"
>
<input type="search" 
:placeholder="placeholder"
 @mouseenter="mouseenter"
@mouseleave="mouseleave"
 >
<button >
            <i class="colourless sousuo"></i>
        </button>
</div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import {useRoute,useRouter} from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route=useRoute()
const router=useRouter()
const style=computed(()=>{
    if(!pageconfigStore.globalclass.includes('scroll')){
        return pageconfigStore.dynamicWH({ normal:  413 , max: 500, min: 253 })
    }else{
        return pageconfigStore.dynamicWH({ normal:  377 , max: 500, min: 253 })
    }
})
// #endregion

// #region  模拟数据 mockjs
import  Mock  from 'mockjs';
const mock=(str)=>{
    return Mock.mock(str)
}
const placeholder=ref('')
onMounted(()=>{
    placeholder.value=mock('@cword(3,15)')
})
//#endregion
const mouseenter=(e)=>{
    e.currentTarget.style.backgroundColor='#e3e5e7'
 
}
const mouseleave=(e)=>{
    e.currentTarget.style.backgroundColor=''
 
}

</script>
<style scoped>
.header_search{
padding-left: 4px;
height: 40px;
border: 1px solid #ffffff;
border-radius: var(--border-radius-max);
overflow: hidden;
background-color: #f1f2f3;
display:flex;
align-items: center;
justify-content: space-between;
}
.header_search input{
    height: 80%;
    width: 90%;
    border-radius: var(--border-radius-max);
/* background-color: palegoldenrod; */
background: none;
padding-left: 5px;
}
.header_search button{
    width: 10%;
    height: 80%;
    flex-shrink: 1;
    background: none;
    border-radius: var(--border-radius-max);
    border: none;
    color: #18272a;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
}
.header_search button:hover{
    background: var( --transparency);
}
</style>
