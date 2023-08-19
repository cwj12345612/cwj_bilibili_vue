<template>
<div class="filter_wrapper" > 
      <ul class="filter_wrapper_items">
        <li><a href="#">综合</a></li>
        <li v-for="index in 6">
          <a href="#">
            <span>{{ mock('@cword(2)') }}</span>
            <div class="count">{{ mock({'num|10-999999':90}).num > 99 ? '99+' : mock({'num|1-99':90}).num}}</div>
          </a>
        
        </li>
        
      </ul>
      
    </div>

</template>
 
<script setup>

import {

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
</script>
<style scoped>
 .filter_wrapper{
  width: 100%;
  height: 44px;
  /* background-color: orange; */
  display: flex;
  align-items: center;
  border-bottom: 2px solid #f1f2f3;
}
 .filter_wrapper .filter_wrapper_items{
  width: 40%;
  height: 80%;
  /* background-color: palevioletred; */
  display: flex;
  align-items: center;
  justify-content: space-between;
 
}
 .filter_wrapper .filter_wrapper_items li {
  display: flex;
  align-items: center;
  height: 100%;
  
}
 .filter_wrapper .filter_wrapper_items li:hover{
  border-bottom: 2px solid #00aeec;
}
 .filter_wrapper .filter_wrapper_items li:hover a span{
  color: #00aeec;
}
 .filter_wrapper .filter_wrapper_items li a{

  display: flex;
  align-items: center;
justify-content: space-between;
}
 .filter_wrapper .filter_wrapper_items li a .count{
  margin-left: 4px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}
</style>