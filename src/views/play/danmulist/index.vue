<template>

<div class="danmulist">
   <div class="left">
    <span>弹幕列表</span>
    <span style="cursor: pointer;">
        <i class="colourless diandiandianshu" style="font-size: 20px;"></i>
    </span>
   </div>
    <span class="more">
        <i class="colourless xialaxiao"></i>
    </span>
    
</div>
</template>
 
<script setup>

import {

    } from 'vue'

import {

    } from 'vuex'

</script>
<style scoped>
.danmulist{
    width: 100%;
    padding: 0 15px;
    height: 44px;
    background-color: #f1f2f3;
    /* background-color: orange; */
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.danmulist .more {
    cursor: pointer;
    transition: all 0.3s;
}
</style>