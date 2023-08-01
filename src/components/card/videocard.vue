<!-- 视频卡片 -->
<template>
<div class="video" :style="dynamicWH( {normal:245,max:380,min:240})">
<a class="img" href="#">
    <img src="@/assets/images/视频图片.png"  alt="">
    <div class="detail">
        <span>
            <i class="colourless bofangshu"></i>
            14万
        </span>
        <span>
            <i class="colourless danmushu"></i>
            1453
        </span>
        <span>
          13:12
        </span>
    </div>
</a>
<div href="#" :title="title"  class="title"  :style="{...dynamicWH(
     {normal:229+16,max:356+24,min:224+16},
     {normal:44,max:48,min:44},
),'padding-right':dynamicWH( {normal:16,max:24,min:16}).width}"  >
<a href="#">
    {{ title }}
</a>
</div>

<a class="author" href="#" :style="dynamicWH(undefined, {normal:17,max:19,min:17})">
    <i class="colourless UPzhu"></i>
    <span style="margin: 0 5px;">美国总统本统</span>
     · <span style="margin-left: 5px;">2023-10-10</span>
</a>
</div>
</template>
 
<script setup>

import {
ref,onMounted
    } from 'vue'

import {

    } from 'vuex'
    import dynamicsize from '@/utils/dynamicsize.js'
    
import Mock from 'mockjs'
const title=ref('');
onMounted(()=>{
    title.value=Mock.mock('@cword(10)')
})
const dynamicWH=(width,height)=>{
    return dynamicsize.dynamicWH(width,height).value
}
</script>
<style scoped>
.video {
    height: 100%;
    /* background-color: cornflowerblue; */
    position: relative;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}
.video .img {
   width: 100%;
   height: 60%;
  overflow: hidden;
border-radius: 4px;
position: relative;
}
.detail {
    color: #ffffff;
    width: 100%;
   background: rgba(0, 0, 0, 0.5);
    height: 20px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.title {
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}
.title a {
      font-size: 15px;
    color: #18191c;
}
.title a:hover {
    color: skyblue;
}
.author  {
    width: 100%;
    /* background-color: orangered; */
    padding: 0 10px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    font-size: 13px;
    color: #9490a0;
}
.author:hover {
    color: skyblue;
}
</style>