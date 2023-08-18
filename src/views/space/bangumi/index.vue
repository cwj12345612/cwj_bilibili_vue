<template>

<div class="bangumi">
<div class="top">
    <div class="left">
        <h3 style="font-size: 20px;">我的订阅</h3>
        <ul class="category">
            <li>
                <a>
                    追剧
                </a>
            </li>
            <li>
                <a>
                    追剧
                </a>
            </li>
            <li>
                <a>
                    追剧
                </a>
            </li>
        </ul>
    </div>
    <div class="right">
        <span>筛选: </span>
        <div class="filter">
            <span>全部</span>
            <i class="colourless xialaxiao"></i>
        </div>
    </div>
</div>
<ul class="list">
<li v-for="index in 13">
    <div class="img">
        <img src="../../../assets//images/spacepage_dingyue.webp" alt="">
    </div>
    <div class="deatil">
        <h3 class="title">
            {{ mock('@cword(2,20)') }}
        </h3>
        <div class="synopsis">
            {{ mock('@cword(4,50)') }}
        </div>
        <div class="other">
            <div>
                <span>番剧</span><span>|</span><span>{{`日本`}}</span>
            </div>
            <div>
                <span>看到第</span><span>{{ `101话` }}</span><span>|</span><span>全52话</span>
            </div>
          
        </div>
        <div class="bottom">
                <span>
                    <i class="colourless diandiandianshu"></i>
                </span>
            </div>
    </div>
</li>
</ul>
<div class="page" :style="dynamicWH( {normal:534,max:540,min:534},)">
      <button class="last">上一页</button>
      <button v-for="index in 6" class="index">{{ index+1 }}</button>
      <span>...</span>
      <button class="index">34</button>
      <button class="next">下一页</button>
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
    return Mock.mock(str);
}
import dynamicsize from '@/utils/dynamicsize';
const dynamicWH = (w, h) => {
  return dynamicsize.dynamicWH(w, h).value
}
</script>
<style scoped>
.bangumi{
    width: 100%;
    /* height: 1000px; */
    /* background-color: palegreen; */
    padding: 0 20px;
}
.bangumi .top {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: chocolate; */
}
.bangumi .top .right{
    height: 100%;
    width: 10%;
    /* background-color: purple; */
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.bangumi .top .left{
    height: 100%;
    width: 30%;
    /* background-color: palevioletred; */
    display: flex;
    align-items: center;

}
.bangumi .top .left .category{
    display: flex;
    align-items: flex-start;
    height: 50%;
    width: 150px;
    
    font-size: 14px;
    justify-content: space-around;

}
.bangumi .top .left .category li a{
    color: #222222;
}
.bangumi .top .left .category li:hover a{
   color: #23c9ed;

}
.bangumi .top .right .filter{
    cursor: pointer;
}
.bangumi .list{
    width: 100%;
    padding: 0 2em;
    /* background-color: olivedrab; */
    /* height: 600px; */
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3,1fr);
    /* grid-template-rows: repeat(5,140px); */
    justify-content: center;
    align-items: c;
}
.bangumi .list li {
    height: 140px;
    /* background-color: peru; */
    display: flex;
        justify-content: space-between;
}
.bangumi .list li .img{
    height: 100%;
    width: 30%;
    border-radius: 8px;
    overflow: hidden;
}
.bangumi .list li .deatil{
    width: 67%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.bangumi .list li .deatil h3{
      text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
.bangumi .list li .deatil .synopsis{
    width: 100%;
    height: 30%;
  
    /* background-color: #23c9ed; */
      word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;


}
.bangumi .list li .deatil .other{
    color: #999999;
    /* background-color: palevioletred; */
}
.bangumi .list li .deatil  .bottom{
    display: flex;
    justify-content: flex-end;
}

.page{
 margin: 30px auto;
 height: 34px;
 /* background-color: tomato; */
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.page button {
  cursor: pointer;
  height: 100%;
  border: 1px solid grey;
  background-color: #f1f2f3;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page button:hover{
  background-color: #00aeec;
}
.page button.index{
  
  width: 40px;
}
.page button.next,
.page button.last{
  padding: 0 15px;
}
</style>