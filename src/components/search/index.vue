<template>
 <div class="search">
      <input type="text" placeholder="请输入搜索内容" v-model="search"  @keyup.enter.native="submit">
      <button class="icon" @click="submit">
            <i class="iconfont icon-sousuo"></i>
      </button>
 </div>
</template>
 

 
<script setup>

import {
      ref,
      watch,
      } from 'vue'

import {

      } from 'vuex'
      import {
            useRouter
      } from 'vue-router'
const search=ref('vue3入门到精通')
const router=useRouter()
const submit=()=>{
      if(!search.value || !(search.value.trim()))   return false
      router.push({name:'search',params:{'search':search.value}})
      
}
</script>

<style scoped>
.search {
      background-color: #f1f2f3;
      height: 70%;
      width: 20%;
     border-radius: 8px;
     overflow: hidden;
     padding-left: 8px;
     display: flex;
     justify-content:center;
     align-items: center;
}
.search input {
      width: 80%;
      height: 100%;
     background-color: #f1f2f3;
      padding: 3px 0;
      padding-left: 5px;
      border: none;
}

.search .icon {
      cursor: pointer;
      width: 32px;
      height: 32px;
      /* background-color: blueviolet; */
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      /* color: skyblue; */
}
</style>