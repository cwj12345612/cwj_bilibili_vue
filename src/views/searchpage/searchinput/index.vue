<template>
<div class="searchpage_searchinput"
:style="pageconfigStore.dynamicWH(undefined,{normal:48,max:64,min:48})"
id="searchpage_searchinput"
:class="ca"
>

<div class="input"
:style="pageconfigStore.dynamicWH(undefined,{normal:48,max:54,min:44})"

>
<i class="colourless sousuo"></i>
<input type="search" placeholder="请输入搜索内容">
<button>
    搜索
</button>
</div>
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
// #endregion

const ca=computed(()=>{
    let height=0
    const searchpage_searchinput=document.getElementById('searchpage_searchinput')
  
    height+=searchpage_searchinput? searchpage_searchinput.offsetHeight :0
    height+=64
    // height+=20
   
   console.log(height,pageconfigStore.scroll)
    return {
        'scroll':height<pageconfigStore.scroll
    }
})
// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}

//#endregion

</script>
<style scoped>
.searchpage_searchinput{
    margin: 20px 0;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
   /* transition: all 0.3s; */
}
.searchpage_searchinput.scroll{
    position: fixed;
    top: 0;
    margin-top: 0;
}
.searchpage_searchinput .input{
    width: 640px;
    padding: 5px;
    border: 1px solid #f1f2f3;
    /* 246, 247, 248 */
    background-color: rgb(246, 247, 248);
    border-radius: var(--border-radius-max);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.searchpage_searchinput .input i {
    color: #00aeec;
    font-size: 25px;
}
.searchpage_searchinput .input input{
    background-color: rgb(246, 247, 248);
    width: 80%;
    height: 90%;
border: none;
}
.searchpage_searchinput .input button{
    height: 90%;
   padding: 0 30px;
   background-color: #00aeec;
   color: #ffffff;
   border: none;
   border-radius: var(--border-radius-max);
}
.searchpage_searchinput .input button:hover{
    background-color:rgb(64,197 , 241);
}

</style>
