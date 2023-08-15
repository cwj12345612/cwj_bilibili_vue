<template>

<ul class="navlist" :style="style">
<li v-for="(item,index) in navlist"  :href="item.href" @mousemove.stop="show" @mouseout="none">
    <a :href="item.href">{{ item.title }}</a>
   <div class="card"></div>
</li>
<li class="more"  @mousemove.stop="show" @mouseout="none">
    <a href="#">
        <span>更多</span>
    <i class="colourless xialaxiao"></i>
    </a>
    <div class="card"></div>
</li>
</ul>
</template>
 
<script setup>

import dynamicsize from '@/utils/dynamicsize';
import {
reactive
    } from 'vue'

import {

    } from 'vuex'
// (816+30)x66
import  Mock  from 'mockjs';
const style=dynamicsize.dynamicWH(
    {normal:816+30,max:1436+30+2,min:677+30+1},
    {normal:66,max:78,min:66},

)
const dynamicWH=(width,height)=>{
    return dynamicsize.dynamicWH(
    width,
    height

).value
}

const navlist=reactive([
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                {title:Mock.mock('@cword(2,3)'),href:'#',},              
                          
                        
            ])
            const show=(e)=>{
const card=e.currentTarget.querySelector('.card');
card.style.display='grid'
}
const none=(e)=>{
    const card=e.currentTarget.querySelector('.card');
card.style.display='none'
}
</script>
<style scoped>
.navlist{
    position: relative;
   /* background-color: coral; */
   max-width:  calc(1436px + 30px + 2px);
   max-height: 78px;
   min-width: calc(677px + 30px + 1px);
   min-height: 66px;
   padding-right: 30px;
    
   border-right: 2px solid gray;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(11,1fr);
    grid-template-rows: repeat(2,1fr);
}

li  {
    position: relative;
    font-size: 14px;
   background-color: #f6f7f8;
border-radius: 6px;
display: flex;
justify-content: center;
align-items: center;
 
}

.navlist  li .card{
    display: none;
    transition: all 0.4s;
    width: 130%;
    height: 60px;
    background-color: palegreen;
    position: absolute;
  
    left: 0%;
  padding: 2px;
border-radius: 8px;
left: 50%;
transform: translateX(-100%);
}
.navlist li:has(.card):hover a{
    color: #00aeec;
}
.navlist  li:nth-child(-n+11) .card{
    /* top: -50px; */
    top: 0;
    transform: translateY(-100%) translateX(-50%);
}
.navlist  li:nth-child(n+12) .card{
   bottom: 0;
   transform: translateY(100%) translateX(-50%);
   z-index: 1;
}
.more i {
    transition: all 0.5s;
   display: inline-block;
}

.more:hover i {
   /* background-color: blueviolet; */
   transform: rotate(180deg);
}

</style>