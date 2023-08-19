<template>

<ul class="right" :style="style">
<li v-for="(item) in list" 
>
    <a :href="item">
        <i :class="item.iclass"></i>
        <span>{{ item.title }}</span>
</a></li>
</ul>
</template>
 
<script setup>

import dynamicsize from '@/utils/dynamicsize';
import {
reactive,
computed,
ref
    } from 'vue'

import {
useStore
    } from 'vuex'
   import  Mock  from 'mockjs';
    //#region 
// 240x66
const style=dynamicsize.dynamicWH(
    // {normal:240,max:258,min:240},
    undefined,
    {normal:66,max:78,min:66},
)

//#endregion
const list=reactive([
                {title:'专栏',herf:'#',iclass:'colourless chuangzuozhongxin'},
                {title:'社区中心',herf:'#',iclass:'colourless shequ'},
                {title:'活动',herf:'#',iclass:'colourless huodongxiangqu'},
                {title:'直播',herf:'#',iclass:'colourless zhiboguankanshu'},
                {title:'课堂',herf:'#',iclass:'colourless ketang'},
              
                {title:'新歌热榜',herf:'#',iclass:'colourless yinle'},
            ])
</script>
<style scoped>
.right{
    /* width: 100%; */
    /* background-color: coral; */
display: grid;
grid-row-gap: 10px;
grid-column-gap: 15px;
grid-auto-flow: column;
grid-template-rows: repeat(2,1fr);
grid-template-columns: repeat(3,auto);
}
.right li a {
    font-size: 14px;
    color: #61666d;
}
.right li:hover a{
    color: #00aeec;
}

</style>