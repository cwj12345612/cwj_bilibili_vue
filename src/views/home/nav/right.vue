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
   
    //#region 
// 240x66
const style=dynamicsize.dynamicWH(
    {normal:240,max:258,min:168},
    {normal:66,max:78,min:66},
)

//#endregion
const list=reactive([
                {title:'专栏',herf:'#',iclass:'colourless wodeguanzhu'},
                {title:'活动',herf:'#',iclass:'colourless wodeguanzhu'},
                {title:'直播',herf:'#',iclass:'colourless wodeguanzhu'},
                {title:'课堂',herf:'#',iclass:'colourless wodeguanzhu'},
                {title:'社区中心',herf:'#',iclass:'colourless wodeguanzhu'},
                {title:'新歌热榜',herf:'#',iclass:'colourless wodeguanzhu'},
            ])
</script>
<style scoped>
.right{
    /* background-color: coral; */
max-width: 258px;
max-height: 78px;
min-width: 168px;
min-height: 66px;
display: grid;
grid-row-gap: 10px;
grid-auto-flow: column;
grid-template-rows: repeat(2,1fr);
}
.right li a {
    font-size: 14px;
    color: #61666d;
}
</style>