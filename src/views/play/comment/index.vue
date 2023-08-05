<template>
    <div class="comment">
        <div class="head" :style="dynamicWH(undefined, { normal: 30, max: 36, min: 30 },)">
            <div class="count">
                <span style="font-size: 20px;">评论</span>
                <span style="color: grey;">44</span>
            </div>
            <div class="top_new" style="margin-left: 20px;display: flex; width: 15%;justify-content: space-around;">
                <span class="style">最热</span>
                <span>|</span>
                <span class="style">最新</span>
            </div>


        </div>

        <div class="main">
            <div class="send">
                <img class="upimg" src="@/assets/images/头像.png" alt="">
                <div class="input">
                    <input type="text" placeholder="评论">
                    <button class="button">
                    发布
                </button>
                
            </div>
            </div>
            <ul class="items">
                <li>
                    <div class="maincomment">
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
 
<script setup>

import {

} from 'vue'

import {

} from 'vuex'
import dynamicsize from '@/utils/dynamicsize.js'
const dynamicWH = (width, height) => {
    return dynamicsize.dynamicWH(width, height).value
}
</script>
<style scoped>
.comment {
    margin-top: 24px;
    width: 100%;
    height: 400px;
    background-color: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.comment .head {
    width: 100%;
    background-color: teal;
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
}

.comment .head .top_new span.style {
    cursor: pointer;
    color: gray;
}

.comment .head .top_new span.style:hover {
    color: #00aeec;
}

.comment .main {
 background-clip: content-box;
    height: 100%;
    background-color: tomato;
    padding-left: 5%;
    width: 100%;
 
}
.comment .main .send {
    grid-column: span 2;
    background-color: #00aeec;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 14fr;
    grid-column-gap: 20px;
    justify-content: center;
    align-content: center;
}
.comment .main .send img.upimg {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    
}
.comment .main .send .input {
  height: 40px;
  width: 100%;
    background-color: orange;
    border-radius: 8px; 
    overflow: hidden;
    display: grid;
    grid-template-columns: 9fr 1fr;
    grid-column-gap: 10px;
    grid-template-rows: repeat(1,1fr);

}
.comment .main .send .input input {
   
    background-color: #f1f2f3;
    border-radius: 8px;
   border: none;
   padding-left: 8px;
    overflow: hidden;
}
.comment .main .send .button {
    cursor: pointer;

border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
background-color: #7fd6f5;
border: none;
color: #f1f2f3;
}
.comment .main .send .button:hover{
    background-color: #00aeec;
}
.comment .main .items {
    display: grid;
    height: 200px;
    background-color: brown;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 14fr;
    grid-template-rows: repeat(5,1fr);
    justify-content: center;
    align-content: center;
}
.comment .main .items  li {
    background-color: chartreuse;
    grid-column: span 2;
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 14fr;
    grid-template-rows: repeat(1,1fr);
    justify-content: center;
    align-content: center;
}
</style>