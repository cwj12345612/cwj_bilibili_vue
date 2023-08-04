<template>

<div class="tool"  :style="dynamicWH(undefined,
 {normal:16+28+12,max:16+36+12,min:16+28+12},
)">
<ul class="left">
    <li>
        <i class="colourless zan"></i>
        <span>17万</span>
    </li>
    <li>
        <i class="colourless Bbi"></i>
        <span>17万</span>
    </li>
    <li>
        <i class="colourless shoucang"></i>
        <span>17万</span>
    </li>
    <li>
        <i class="colourless fenxiang" ></i>
        <span>17万</span>
    </li>
</ul>
<ul class="right">
    <li>
        <i class="colourless tousu"></i>
        <span>稿件投诉</span>
    </li>
    <!-- <li>
        <i class="colourless tousu"></i>
        <span>稿件投诉</span>
    </li> -->
<li>
    <span>
        <i class="colourless diandiandianshu" style="font-size: 25px;"></i>
    </span>
</li>
</ul>
</div>
</template>
 
<script setup>

import {

    } from 'vue'

import {

    } from 'vuex'
import dynamicsize from '@/utils/dynamicsize.js'
const dynamicWH=(width,height)=>{
    return dynamicsize.dynamicWH(width,height).value
}
</script>
<style scoped>
.tool{
    width: 100%;
    padding: 16px 0 12px;
    /* background-color: teal; */
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tool ul.left {

    height: 100%;
    width: 50%;
    /* background-color: paleturquoise; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tool ul.left li {
   cursor: pointer;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tool  i {
    font-size: 25px;
}

.tool  li:hover{
    color: #00aeec;
}
.tool ul.right {
    width: 33%;
    height: 100%;
    /* background-color: cornflowerblue; */
    display: flex;
   align-items: center;
   justify-content: space-between;
}
.tool  li {
    cursor: pointer;
}
</style>