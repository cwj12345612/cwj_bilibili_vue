<template>
<ul class="bingewatch_list">
<li
v-for="index in 7"

>

<div class="img">
    <img :src="require(`@/assets/images/视${mock('@integer(1,10)')}.webp`)" alt="">
</div>
<div class="title">
    {{ mock('@cword(5,10)') }}
</div>
<div class="desc">
    {{ mock('@cword(50)') }}
</div>
</li>
</ul>
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

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}

//#endregion

</script>
<style scoped>
.bingewatch_list{
    grid-column: span 7;
    /* background-color: chocolate; */
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: repeat(7,1fr);
}
li{
    border-radius: var(--border-radius-max);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
li .img{
    width: 100%;
    height: 65%;
    overflow: hidden;
    border-radius: var(--border-radius-max);
}
li .title{
    
   
    color: #18191c;
    font-size: 15px;
}
li .title:hover{
    color: #0aaeec;
}
li .desc{
    font-size: 13px;
    color: #7f7f7f;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
