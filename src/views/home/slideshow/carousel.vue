<template>
    <div class="king">
      <ul class="carousel" ref="homepage_carousel">
        <li v-for="li in list">
            <a :href="li.href" >
            <img :src="li.src" alt="">
        </a>
        </li>
      </ul>
  
    </div>
</template>
 
<script setup>

import {
    ref,
    reactive,
    onMounted
} from 'vue'

import {

} from 'vuex'
import Mock from 'mockjs'

const list=reactive([
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/1.webp')},
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/2.webp')},
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/3.webp')},
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/4.webp')},

])



</script>
<style scoped>
.king {
    /* background-color: orange; */
    background: rgba(0, 0, 0, 0.2);
    height: calc(calc((100% - 20px) / 2)*1.6 + 20px);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
}
.king ul {
    position: absolute;
    left: 0;
    background-color: aqua;
   height: 80%;
   display: flex;
   align-items: center;
   /* justify-content: center; */
}
.king ul li{
    width: 100%;
    height: 100%;
    flex-shrink: 0;
}
.bottom {
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
}</style>