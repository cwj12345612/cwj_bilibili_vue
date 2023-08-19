<template>
 <div class="filter_all">
      <div class="top">
        <ul class="leftlist">
        
           <li v-for="index in 6" 
          :class="index===top_index ? 'checked' :undefined"
          @click.prevent="top_index=index"
           ><a href="#">{{ mock('@cword(4)') }}</a></li>
        </ul>
        <button @click.prevent="showmore=!showmore" class="more_filter">
          <span>更多筛选</span>
          <i class="colourless xialaxiao"></i>
        </button>
      </div>  

         <div class="more"   >
    
        <div v-for="index in 4" class="morelist">
          <li class="title checked"><a href="#">全部分区</a></li>
          <li v-for="index in mock({'num|4-30':30}).num"><a href="#">{{mock('@cword(2,6)')}}</a></li>
        </div>
        
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
const top_index=ref(1)

const dynamicWH = (w, h) => {
  return dynamicsize.dynamicWH(w, h).value
}
const showmore=ref(true)
</script>
<style scoped>

 .filter_all{
  margin-top: 10px;
width: 100%;

background-color: palevioletred;
}
.filter_all .top {
  height: 34px;
  width: 100%;
  background-color: orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.filter_all .top .leftlist {
  height: 100%;
  /* width: 40%; */
  background-color: palegoldenrod;
display: flex;
  justify-content: flex-start;
  align-items: center;
}
.filter_all .top .leftlist li {
  margin-right: 20px;
  padding: 6px;
 
}
.checked  {
  background-color: #dff6fd;
 
  border-radius:6px;
}
.checked a{
  color:#00aeec;
}
.filter_all .top .more_filter{
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e3e5e7;
}
.filter_all .more{
  width: 100%;
  background-color: thistle;
  /* height: 200px; */
}
.filter_all .more .morelist{
  /* background-color: orange; */
  margin-bottom: 15px;
  /* width: 100%; */
  /* height: 200px; */
  display: flex;
  justify-content: flex-start;
  
  flex-wrap: wrap;
}

.filter_all .more .morelist li{
  padding: 6px;
  margin-right: 20px;
}
</style>