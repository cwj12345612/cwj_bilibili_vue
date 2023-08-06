<template>

<div class="nextplay" :style="dynamicWH(undefined, {normal:127.5,max:156,min:127},)">
    <div class="head">
        <span>接下来播放</span>
        <div>
            <span>自动联播</span>
            <i class="colourless bofangqi-bofang" v-if="open" @click="open=false"></i>
            <i class="colourless bofangqi-zanting" v-if="!open" @click="open=true"></i>
        </div>
    </div>
    <recommendvideocard  style="width: 100%;" :style="dynamicWH(undefined, {normal:82.5,max:107,min:82.5},)"></recommendvideocard>
</div>
</template>
 
<script setup>
import recommendvideocard from '@/components/card/recommendvideocard.vue'
import {
ref
    } from 'vue'

import {

    } from 'vuex'
const open=ref(true)
import dynamicsize from '@/utils/dynamicsize.js'
const dynamicWH=(w,h)=>{
    return dynamicsize.dynamicWH(w,h).value
}
</script>
<style scoped>
.nextplay{
    width: 100%;
    /* height: 200px; */
    /* background-color: tomato; */
    border-bottom: 1px grey solid;
    display: flex;
    flex-direction: column;
   justify-content: space-around;
}
.nextplay .head {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color:turquoise; */
}
.nextplay .head i {
    cursor: pointer;
    font-size: 20px;
}
</style>