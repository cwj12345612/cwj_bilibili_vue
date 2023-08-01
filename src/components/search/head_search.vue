<template>
<div class="search" :class="Object.values(ca)" :style="dynamicWH({normal:store.state.pageconfig.nowpage.scroll == 0 ? 413:337,max:500,min:253})" :aa="store.state.pageconfig.nowpage.scroll">
    <input type="search" placeholder="请输入搜索内容" :style="dynamicWH({normal:store.state.pageconfig.nowpage.scroll == 0 ? 359 :283,max:(2+8)*2+424,min:(2+8)*2+179})">
    <button>
        <i class="colourless sousuo"></i>
    </button>
</div>

</template>
 
<script setup>

import {
reactive,
ref,
computed,onMounted
    } from 'vue'

import {
useStore
    } from 'vuex'
    const store=useStore();

   

import dynamicsize from '@/utils/dynamicsize';

const dynamicWH=(width,height)=>{
    return dynamicsize.dynamicWH(  width,height).value
}
const scrollTop=ref(0);
onMounted(()=>{
    window.addEventListener('scroll',()=>{
       scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop;
    })
})
const ca = computed(()=>{
    const cl={};
         const name = store.state.pageconfig.nowpage.name
     cl.name=name
     if (scrollTop.value != 0) {
            cl.scroll = 'scroll'
        } else {
            cl.scroll = null
        }
    return cl
})
</script>
<style scoped>
.search {
    height: 40px;
    display: flex;
    align-items: center;
    /* background-color: blueviolet; */
    justify-content: space-evenly;
    background-color: #ffffff;
  flex-grow: 0;
  flex-shrink: 0;
    border-radius: 8px;
    padding-left: 4px;
    /* padding-right: 48px; */
}

input[type='search']{
    display: flex;
    flex-shrink: 1;
    height: 32px;
    flex-grow: 0;
    padding: 0 8px;
    border: 2px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0);
}
button {
    border-radius: 6px;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 32px;
    width: 32px;
}
button:hover {
    background-color: #f2f3f4de;
}
.search.homepage {
    background-color: #ffffff;
}
.search.scroll {
    background-color: #f2f3f4de;
}
.search.articlepage{
    background-color:#f2f3f4;
}
</style>