<template>

<ul class="left" :style="style">
    <li 
    
    :style="dynamicWH(
         {normal:46,max:46,min:40},
         {normal:72,max:72,min:70},
    )"
    v-for="item in list"
    ><a :href="item.herf">
        <img :src="item.src"
        :style="{...imgstyle,'border-radius':radius}"
          alt="">
          <span>{{ item.title }}</span>
    </a></li>
</ul>
</template>
 
<script setup>

import {
reactive,watch,ref
    } from 'vue'

import {

    } from 'vuex'

import dynamicsize from '@/utils/dynamicsize';
//#region 
const style =dynamicsize.dynamicWH(
    // 210x72
    {normal:210,max:234,min:150},
    {normal:72,max:72,min:64},
)

const dynamicWH=(width,height)=>{
   return dynamicsize.dynamicWH(width,height).value
}
const radius=ref('0')
const imgstyle=dynamicsize.dynamicWH(
         {normal:46,max:46,min:40},
         {normal:46,max:46,min:40},
    )
watch(()=>imgstyle,()=>{
     radius.value=(imgstyle.value.width.replaceAll('px','') / 2)+'px'  
},{immediate:true,deep:true})
//#endregion

const list=reactive(
    [
                { title:'动态',src: require('@/assets/images/头像.png'),herf:'#' },
                { title:'热门',src: require('@/assets/images/头像.png'),herf:'#' },
                { title:'频道',src: require('@/assets/images/头像.png'),herf:'#' },
               
            ]
)
</script>
<style scoped>
.left {
    min-height: 64px;
    min-width: 150px;
    max-width: 234px;
    max-height: 72px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-color: chocolate; */
}
.left li {
 
/* 46x72 */
min-width: 40px;
min-height: 64px;
max-width: 46px;
max-height: 72px;
}
.left li a{
    display: flex;
    width: 100%;
    height: 100%;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   color: #18191c;
}
</style>