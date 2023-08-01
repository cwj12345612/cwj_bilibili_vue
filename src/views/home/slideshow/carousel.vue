<template>

<div class="king">
<a href="#" class="img">
<img src="@/assets/images/轮播图.png" alt="">
</a>
<div class="bottom">
<div class="title">
    <a href="#">{{ title }}</a>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
<div class="button">
    <button >
        <i class="colourless fanhui"></i>
    </button>
    <button >
        <i class="colourless gengduo"></i>
    </button>
</div>
</div>
</div>
</template>
 
<script setup>

import {
ref,
onMounted
    } from 'vue'

import {

    } from 'vuex'
import Mock from 'mockjs'
const title=ref(Mock.mock('@cword(20)'))

</script>
<style scoped>
.king{
    /* background-color: orange; */
    background: rgba(0, 0, 0, 0.2);
    height: calc(calc((100% - 20px) / 2)*1.6 + 20px);
    border-radius: 8px;
    overflow: hidden;

}
.king .img {
    display: block;
    width: 100%;
    height: 80%;
    /* background-color: turquoise; */
}
.bottom  {
    width: 100%;
    height: 20%;
    /* background-color: cadetblue; */
    background-clip: content-box;
    padding: 10px 10px 0 10px;
position: relative;

}
.bottom .title {
    float: left;
    /* background-color: orangered; */
    width: 70%;
    height: 80%;
    display: flex;
  flex-direction: column;
  justify-content: space-around;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
   
}
.title a {
    color: #ffffff;
}
.title li {
  background: rgba(0, 0, 0, 0.5);
    float: left;
    width: 12px;
    height: 12px;
    margin: 3px;
    border-radius: 6px;
    cursor: pointer;
}
.button {
    float: right;
    width: 10%;
    height: 21px;
    /* background-color: burlywood; */
    display: flex;
    justify-content: space-between;
}
.button button {
   cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 3px;
    width: 40%;
    height: 100%;
color: #f2f3f4;
}
</style>