<!-- 搜索页的搜索组件 -->
<template>
<div class="searchpage_search" :class="ca" :style="style">
    <i class="colourless sousuo" style="font-size: 25px;color: #00aeec;margin-left: 15px;"></i>
    <input type="search" :style="dynamicWH({normal:466,max:468,min:308})" placeholder="请输入搜索内容">
    <button >搜索</button>
</div>

</template>
 
<script setup>


import {
reactive,ref,
onMounted,
computed,
watch
    } from 'vue'

import {
useStore
    } from 'vuex'
const store=useStore()
defineProps({
    ca:Object
})
import dynamicsize from '@/utils/dynamicsize';
const style=dynamicsize.dynamicWH({normal:640,max:640,min:480})
const dynamicWH=(width,heigth)=>{
    return dynamicsize.dynamicWH(width,heigth).value
}
</script>
<style scoped>
.searchpage_search {
    background-color: #f2f3f4;
    height: 48px;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
input[type='search']{
height: 36px;
border: none;
border-radius: 8px;
}
button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
  width: 100px;
  background-color: #00aeec;
  border-radius: 8px;
  border: none;
}
</style>