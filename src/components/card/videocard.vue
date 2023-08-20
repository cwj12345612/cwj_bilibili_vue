<template>
<div class="videocard">
    <div class="img">
        <img src="@/assets/images/视频图片.png" alt="">
    </div>
    <p class="title">
        {{ mock('@cword(4,60)') }}
    </p>
    <a class="info">
        <i class="colourless UPzhu"></i>
        <span >{{ mock('@cword(2,7)') }}</span>
        <span>·</span>
        <span>{{ mock('@datetime("yyyy-MM-dd")') }}</span>
    </a>
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
.videocard{
    width: 100%;
    height: 100%;
    /* background-color: tomato; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.videocard .img{
    width: 100%;
    height: 60%;
    border-radius: var( --border-radius-max);
    overflow: hidden;
    position: relative;
}
.videocard .title{
    font-size: 15px;
    /* background-color: aqua; */
    width: 100%;

    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;


}
.videocard .title:hover{
    color: #00aeec;
}
.videocard .info{
    width: 100%;
    display: flex;
    height: auto;
    align-items: center;
    padding: 5px 0;
    font-size: 13px;
    color: #9499a0;
    justify-content: flex-start;
}
.videocard .info span{
    margin-left: 5px;
}
.videocard .info:hover{
    color: #00aeec;
}
</style>
