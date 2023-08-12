<template>
    <div class="home">
        <div class="left">
            <div class="item">
                <div class="title">
                    <div class="count">
                        <h3>我的收藏夹</h3>
                        <span>11</span>
                    </div>
                    <button class="more">
                        <span>更多</span>
                        <i class="colourless gengduo"></i>
                    </button>
                </div>
                <ul class="list">
                    <li v-for="index in 6">
                        <div class="img">
                            <img src="../../../assets/images/spacepage_home_item.webp" alt="">
                            <div class="count">88</div>
                        </div>
                        <div class="name">
                            <h3>c#基础入门</h3>
                            <span class="type">公开</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="recently">
                <div class="title">
                    <h3>最近投币的视频</h3>
                </div>
                <ul class="list" >
                    <li v-for="index in  7">
                        <div class="img">
                            <img src="../../../assets//images/视频图片.png" alt="">
                            <span>24:09</span>
                        </div>
                        <div class="title">
                            {{ mock('@cword(50)') }}
                        </div>
                        <div class="detail">
                            <span>
                                <i class="colourless bofangshu"></i>
                                <span>111万</span>
                            </span>
                            <span>
                                <i class="colourless danmushu"></i>
                                <span>111</span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="recently">
                <div class="title">
                    <h3>最近点赞的视频</h3>
                </div>
                <ul class="list" >
                    <li v-for="index in  7">
                        <div class="img">
                            <img src="../../../assets//images/视频图片.png" alt="">
                            <span>24:09</span>
                        </div>
                        <div class="title">
                            {{ mock('@cword(50)') }}
                        </div>
                        <div class="detail">
                            <span>
                                <i class="colourless bofangshu"></i>
                                <span>111万</span>
                            </span>
                            <span>
                                <i class="colourless danmushu"></i>
                                <span>111</span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
<div class="right"></div>
    </div>
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
</script>
<style scoped>
.home {
    margin-top: 20px;
    width: 100%;
    /* height: 1000px; */
    /* background-color: #00a1d6; */
}

.right {
    float: right;
    width: 24%;
    height: 500px;
    background-color: #b8c0cc;
}

.left {
    padding: 0 10px;
    float: left;
    width: 75%;
    /* height: 100%; */
    /* background-color: chocolate; */
}

.left .item {

    border-bottom: 1px solid #e5e9ef;
    width: 100%;
    height: 484px;
    /* height: 500px; */
    /* background-color: palevioletred; */
}

.left .item .title {
    width: 100%;
    height: 50px;
    /* background-color: teal; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left .item .title .count {
    display: flex;
    align-items: center;
}

.left .item .title .more {
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 6px;
    border: 1px solid #b8c0cc;
}

.left .item .list {
    /* background-color: darkgreen; */
    width: 100%;
    height: calc(100% - 50px);
    padding-right: 30px;
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
}

.left .item .list li {

    width: 100%;
    height: 90%;
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.left .item .list li .img {

    width: 100%;
    height: 85%;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
}

.left .item .list li .img .count {
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0 8px;
    border-radius: 8px;
    color: #ffffff;
}

.left .item .list li .name {
    /* background-color: palevioletred; */
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left .item .list li .name h3 {
    color: #313431;
    cursor: pointer;
}

.left .item .list li .name h3:hover {

    color: #00a1d6;
}

.left .recently {
    height: 418px;
    width: 100%;
    border-bottom: 1px solid #e5e9ef;
    /* background-color: cadetblue; */
}

.left .recently .title {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* background-color: orange; */
}

.left .recently .list {
    width: 100%;
    height: calc(100% - 50px);
    /* background-color: palevioletred; */
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
}

.left .recently .list li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* background-color: #00a1d6; */
    height: 100%;
}

.left .recently .list li .img {
    width: 100%;
    height: 60%;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
}

.left .recently .list li .img span {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px 10px;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
}

.left .recently .list li .title {
    width: 100%;
    height: 25%;
    font-size: 16px;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.left .recently .list li .detail {
    width: 100%;
    height: 10%;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}</style>