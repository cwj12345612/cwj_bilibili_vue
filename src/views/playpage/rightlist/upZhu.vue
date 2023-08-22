<template>
<div class="upZhu">
<a class="profile" href="/">
    <img src="@/assets/images/头像.png" alt="">
</a>
<div class="rightdetail">
<div class="name">
    <a href="#" class="span">{{ mock('@cword(5)') }}</a>
    <a href="#" class="msg">
        <i class="colourless sixin"></i>
        <span>发信息</span>
    </a>
   
</div>
<!-- <div class="signature">
        {{ mock('@cword(50)') }}
</div> -->

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

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}

//#endregion

</script>
<style scoped>
.upZhu{
    
    width: 100%;
    height: 86px;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.upZhu .profile{
flex-shrink: 0;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background-color: palegreen;
position: relative;
}
.upZhu .profile img{
    border-radius: 50%;
    cursor: pointer;
}
.upZhu .rightdetail{
   
    flex-grow: 0;
    padding-bottom: 15px;
    height: 100%;
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: peru;
}
.upZhu .rightdetail .name{
 
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
}
.upZhu .rightdetail .name .span{
    color: #fb7299;
    margin-right: 10px;
    white-space: nowrap;
    font-size: 15px;
}
.upZhu .rightdetail .name .msg{
    color: #61666d;
    font-size: 13px;
}
.rightdetail .signature{
    
   height: 20px;
   /* display: inline-block; */
    width: 100%;
    color: #9499a0;
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;

}
</style>
