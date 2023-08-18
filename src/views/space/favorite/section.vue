<template>
  <section>
            <div class="title">
                <div class="img">
                    <img src="../../../assets/images/视频图片.png" alt="">
                </div>
                <div class="detail">
                    <h3 class="h3">
                        {{ mock('@cword(100)') }}
                    </h3>
                    <div class="upzhu">
                        <div>
                            <span>创建者:{{ mock('@cword(5)') }}</span>
                            <span style="margin-left: 20px;">播放量: {{ mock({ 'num|1-2222': 2222 }).num }}</span>

                        </div>
                        <div>
                            <span>{{ mock({ 'num|1-1000': 1000 }).num }}个内容</span>
                            <span style="margin-left: 10px;">公开</span>

                        </div>

                    </div>
                    <div class="bottom">

                        <button>
                            <i class="colourless gengduotianchong"></i>
                            <span>立即播放全部视频</span>
                        </button>
                        <a href="#">
                            <i class="colourless zan"></i>
                            <span>10086</span>
                        </a>
                        <a href="#">
                            <i class="colourless fenxiang"></i>
                            <span>分享</span>
                        </a>
                    </div>

                </div>
            </div>
            <div class="list">
                <div class="top">
                    <ul class="setlist">
                        <li>
                            <span>批量操作</span>
                        </li>
                        <li>
                            <span>全部分区</span>
                            <i class="colourless xialaxiao"></i>
                        </li>
                        <li>
                            <span>最近收藏</span>
                            <i class="colourless xialaxiao"></i>

                        </li>
                    </ul>
                    <div class="search">
                        <div class="sea">
                            <span>当前</span>
                            <i class="colourless xialaxiao"></i>
                        </div>
                        <input type="search" placeholder="输入关键词">
                        <i class="colourless sousuo" style="font-size: 20px;"></i>
                    </div>
                </div>
                <ul class="section">
                        <li v-for="index  in 7">
                            <div class="img">
                                <img src="../../../assets//images/视频图片.png" alt="">
                            <span>3:09:14</span>
                            </div>
                            <div class="sectiontitle">
                                {{ mock('@cword(5,50)') }}
                            </div>
                            <div class="msg">
                               <span>收藏于: {{ mock('@date()') }}</span>
                           <span>
                            <i class="colourless diandiandianshu"></i>
                           </span>
                            </div>
                        </li>
                        <!-- <li style="background-color: darkgoldenrod;"></li> -->
                </ul>
                <div class="page" :style="dynamicWH( {normal:534,max:540,min:534},)">
      <button class="last">上一页</button>
      <button v-for="index in 6" class="index">{{ index+1 }}</button>
      <span>...</span>
      <button class="index">34</button>
      <button class="next">下一页</button>
    </div>
            </div>
        </section>

</template>
 
<script setup>

import {

    } from 'vue'

import {

    } from 'vuex'
    import Mock from 'mockjs'
const mock = (str) => {
    return Mock.mock(str)
}
import dynamicsize from '@/utils/dynamicsize';
const dynamicWH = (w, h) => {
  return dynamicsize.dynamicWH(w, h).value
}
</script>
<style scoped>

.favorite section {
    float: right;
    /* height: 600px; */
    width: calc(100% - 209px);
    /* background-color: olivedrab; */
    padding: 0 20px;

}

.favorite section .title {
    width: 100%;
    padding: 20px 0;
    height: calc(119px + 40px);
    /* background-color: darkcyan; */
    border-bottom: 1px solid #f4f5f7;
    display: flex;
    align-items: center;
}

.favorite section .title .img {
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    width: 20%;
    border-radius: 8px;
    overflow: hidden;

}

.favorite section .title .detail {
    height: 100%;
    width: 50%;
    /* background-color: chocolate; */
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

}

.favorite section .title .detail .h3 {
    height: 15%;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;

    font-style: normal;
    font-size: 14px;
}

.favorite section .title .detail .upzhu {
    height: 35%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: darkkhaki; */
    font-size: 14px;
}

.favorite section .title .detail .bottom {
    height: 30%;
    width: 100%;
    /* background-color:darkviolet ; */
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.favorite section .title .detail .bottom button {
    height: 100%;
    width: 40%;
    border-radius: 8px;
    background-color: #00a1d6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border: none;
    color: #f4f5f7;
}

.favorite section .title .detail .bottom a {
    /* color: #; */
    color: #222222;
    font-size: 18px;
}

.favorite section .title .detail .bottom a:hover {
    color: #00a1d6;
}

.favorite section .list {
    width: 100%;
    /* height: calc(100% - 159px); */
    /* background-color: cadetblue; */
}

.favorite section .list .top {
    width: 100%;
    height: 50px;
    /* background-color: chocolate; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
}

.favorite section .list .top .setlist {
    height: 100%;
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: space-around;
    /* background-color: cornflowerblue; */
}

.favorite section .list .top .setlist li:hover {
    color: #00a1d6;
}

.favorite section .list .top .search {
    width: 20%;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #f4f5f7;
    overflow: hidden;
    /* background-color: darkcyan; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
}

.favorite section .list .top .search .sea {
    cursor: pointer;
    width: 23%;
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid #f4f5f7;
    font-size: 12px;
}

.favorite section .list .top .search input {
    padding-left: 10px;
    width: 65%;
    height: 80%;
    background: none;
    border: none;
}

.favorite section .list .section{
    width: 100%;
    height: calc(100% - 50px);
    /* background-color: cornflowerblue; */
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(2,1fr);
   gap: 20px;
   justify-content: center;
   align-items: center;
}
section>.list>.section>li{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
section>.list>.section>li>.img{
        height: 60%;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
}
section>.list>.section>li>.img>span {
    background: rgba(0, 0, 0, 0.4);
    padding: 4px 10px;
    border-radius: 8px;
    position: absolute;
    bottom: 0;
    right: 0;
    color: #f4f5f7;
}
section>.list>.section>li>.sectiontitle {
    width: 100%;
    height: 23%;
    /* padding: 0; */
    /* background-color: #f4f5f7; */
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
}
section>.list>.section>li>.sectiontitle:hover{
    color: #00a1d6;
}
.favorite section .list .section li .msg{
width: 100%;
height: 15%;
/* background-color: orchid; */
display: flex;
align-items: center;
justify-content: space-between;
font-size: 12px;
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