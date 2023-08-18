<template>

<div class="recommendvideocard">
<div class="img">
    <img src="@/assets/images/视频图片.png" alt="">
    <span class="time">10:14</span>
</div>
<div class="detail">
    <a class="title" href="#">
        {{ mock('@cword(4,50)') }}
    </a>
    <a class="up" href="#">
        <i class="colourless UPzhu"></i>
        <span>{{ mock('@cword(2,7)') }}</span>
    </a>
    <div class="other">
        <span>
            <i class="colourless bofangshu"></i>
            11万
        </span>
        <span>
            <i class="colourless danmushu"></i>
            {{ mock({'num|100-5000':5000}).num }}
        </span>
    </div>
</div>
</div>
</template>
 
<script setup>

import {

    } from 'vue'

import {

    } from 'vuex'
import Mock from 'mockjs'
const mock=(str)=>{
    return Mock.mock(str)
}
const title=Mock.mock('@cword(5,50)')
</script>
<style scoped>
.recommendvideocard{
    /* background-color: cornflowerblue; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.recommendvideocard .img {
    cursor: pointer;
position: relative;
height: 100%;
width: 40%;
border-radius: 8px;
overflow: hidden;
/* z-index: -1; */
}
.recommendvideocard .img span{
    /* z-index: -1; */
    position: absolute;
    bottom: 5%;
    right: 5%;
    color: #f1f2f3;
}
.recommendvideocard .detail {
    height: 100%;
    width: 55%;
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.detail a.title {
    color: black;
    cursor: pointer;
    width: 100%;
    height: 50%;
    max-height: 42px;
    /* background-color: tomato; */

    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}
.detail .up:hover i,
.detail .up:hover span
 {
color: #00aeec;
}
.detail i ,
.detail span {
    font-size: 14px;
    color: #979ca3;
}
</style>