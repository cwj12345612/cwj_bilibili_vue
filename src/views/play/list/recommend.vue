<template>

<ul class="recommend">
 
       <li v-for="index in 10">
        <recommendvideocard style="width: 100%; " :style="dynamicWH(undefined, {normal:82.5,max:107,min:82.5},)" ></recommendvideocard>
       </li>
       
</ul>
</template>
 
<script setup>
import recommendvideocard from '@/components/card/recommendvideocard.vue'
import {

    } from 'vue'

import {

    } from 'vuex'
    import dynamicsize from '@/utils/dynamicsize.js'
const dynamicWH=(w,h)=>{
    return dynamicsize.dynamicWH(w,h).value
}
</script>
<style scoped>
.recommend{
    margin-top: 18px;
    width: 100%;
    /* height: 400px;
    background-color: chocolate; */
}
.recommend li {
    margin-bottom: 10px;

}
</style>