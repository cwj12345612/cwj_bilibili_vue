<template>
  <div class="search" :style="style">
    <searchpage_search class="searchpage_search" v-if="store.state.pageconfig.nowpage.scroll == 0"></searchpage_search>
    <filter_wrapper></filter_wrapper>
  <filter_all></filter_all>
  
    <ul class="box">
      <li v-for="index in 14">
        <videocard></videocard>
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
import filter_all from './filter/filter_all.vue'
import filter_wrapper from './filter/filter_wrapper.vue'
import videocard from '@/components/card/videocard.vue'
import searchpage_search from '@/components/search/searchpage_search.vue'
import {
  ref, reactive, onMounted, watch
} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import dynamicsize from '@/utils/dynamicsize';
import Mock from 'mockjs'
const mock=(str)=>{
  return Mock.mock(str)
}
const dynamicWH = (w, h) => {
  return dynamicsize.dynamicWH(w, h).value
}
const style = dynamicWH({ normal: 1305, max: 2024, min: 1004 },)

import {
  useStore
} from 'vuex'
const store = useStore()
</script>
<style scoped>
.search {
  /* .style="width: 100%; height: 500px;padding: 0 64px;background-color: orange;" */
  /* width: 100%; */
  /* height: 500px; */
  /* background-color: orange; */
  background-clip: content-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.search .searchpage_search{
  margin-top: 30px;
}
.box {
  margin-top: 20px;
  /* position: absolute; */
  width: 100%;
  /* height: 300px; */
  /* background-color: palevioletred; */
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: repeat(1,1fr); */
  justify-content: center;
  align-items: center;
}

.box li {
  width: 100%;
  /* height: 212px; */
  /* background-color: teal; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.page{
 margin: 50px 0;
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