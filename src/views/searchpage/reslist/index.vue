<template>
<div class="searchpage_res">
<searchpage_videolist></searchpage_videolist>
<div class="page"
:style="pageconfigStore.dynamicWH({normal:534,max:539.5,min:534})"
>
<button class="skip previous disabled" >上一页</button>
<button 
v-for="index in 7" class="index" 

:class="index==1 ?'checked' :undefined"

>{{ index }}</button>
<span>...</span>
<button class="index">50</button>
<button class="skip next">下一页</button>
</div>
</div>
</template>
<script setup>
// #region  引入组件
import searchpage_videolist from './videolist.vue'
//  #endregion

// #region 引入vue pinia 路由
import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import {useRoute,useRouter} from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route=useRoute()
const router=useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}

//#endregion

</script>
<style scoped>
.searchpage_res{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.page{
    height: 34px;
    /* background-color:orange; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.page button{
    color: #18191c;
    font-size: 14px;
    height: 32px;
    background-color: #ffffff;
    border: 1px solid #e3e5e7;
    border-radius: var(--border-radius-min);
}
.page button.skip{
    padding: 0 16px;

}
.page button.index{
    width: 32px;
    height: 32px;
    padding: 8px;

}
.page button.checked{
    pointer-events:none;
    background-color: rgb(0, 174, 236);
   border-color: rgb(0, 174, 236);
   color: #ffffff;
}
.page button:hover{
    background-color: rgb(227, 229, 231);
}
.page button.skip.disabled{
    
    background-color: #e3e5e7;
    opacity:0.5;
pointer-events:none;
}
</style>
