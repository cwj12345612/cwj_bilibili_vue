<template>
 <div class="filter_all">
      <div class="top">
        <ul class="leftlist">
          <li><a href="#">最多播放</a></li>
          <li><a href="#">最多播放</a></li>
          <li><a href="#">最多播放</a></li>
          <li><a href="#">最多播放</a></li>
          <li><a href="#">最多播放</a></li>
          <li><a href="#">最多播放</a></li>
        </ul>
        <button @click.prevent="showmore=!showmore" class="more_filter">
          <span>更多筛选</span>
          <i class="colourless xialaxiao"></i>
        </button>
      </div>
      <div class="more"  :style="`height: ${showmore ? 'auto' :'0px'};`" >
    
        <ul v-for="index in 4" class="morelist">
          <li class="title"><a href="#">全部分区</a></li>
          <li v-for="index in mock({'num|3-30':30}).num"><a href="#">{{ mock('@cword(2,5)') }}</a></li>
        </ul>
      
    </div>
    </div>

</template>
 
<script setup>

import {
ref
    } from 'vue'

import {

    } from 'vuex'
    import dynamicsize from '@/utils/dynamicsize';
import Mock from 'mockjs'
const mock=(str)=>{
  return Mock.mock(str)
}
const dynamicWH = (w, h) => {
  return dynamicsize.dynamicWH(w, h).value
}
const showmore=ref(true)
</script>
<style scoped>

 .filter_all{
  margin-top: 10px;
width: 100%;
/* height: 34px; */
/* background-color: palevioletred; */
}
 .filter_all .top{
  height: 34px;
  width: 100%;
  /* background-color: teal; */
  display: flex;
  align-items: center;
  justify-content: space-between;

}
 .filter_all .top .leftlist{
 height: 100%;
 display: flex;

 justify-content: space-between;
 align-items: center;
 margin-bottom: 20px;
}
 .filter_all .top .leftlist li{
  margin-right: 20px;
}
.filter_all .top .leftlist li:first-child{
  background-color: #dff6fd;
  padding: 8px;
  border-radius:6px;
}
.filter_all .top .leftlist li:first-child a{
  color:#00aeec;
}
 .filter_all .top .more_filter{
  display: block;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 100%;
  padding: 0 10px;
  background: #ffffff;
  border: 1px solid #e3e5e7;
}
 .filter_all .more{
  width: 100%;
  /* background-color: chocolate; */
  /* height: 100px; */
  overflow: hidden;
  transition: all 2s ease;


}

.search .filter_all .more .morelist {

  /* background-color: cornflowerblue; */
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;

}
.search .filter_all .more .morelist .title{
 
  background-color: #dff6fd;
  padding: 8px;
  border-radius:6px;
}
.search .filter_all .more .morelist .title a{
  color:#00aeec;}
.search .filter_all .more .morelist li{
  margin-right: 20px;
  margin-bottom: 10px;
}
.search .filter_all .more .morelist li:nth-child(n+2){
  margin-right: 30px;
}
</style>