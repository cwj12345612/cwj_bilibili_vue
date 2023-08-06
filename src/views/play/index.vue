<template>

<div class="play" :style="style">
<play_title></play_title>
<div class="main">
    <div class="left" :style="dynamicWH(
    {normal:668,max:1694,min:668},

)">
<play_playerWrap></play_playerWrap>
<play_tool></play_tool>
<play_comment></play_comment>

</div>
    <div class="right" 
    :style="dynamicWH(
    {normal:350,max:411,min:350},
)">
<play_danmulist></play_danmulist>
<play_list></play_list>
</div>
</div>
</div>
</template>
 
<script setup>
import play_title from './title'
import play_playerWrap from './playerwrap'
import play_tool from './tool'
import play_comment from './comment'
import play_danmulist from './danmulist'
import play_list from './list'
import {

    } from 'vue'

import {

    } from 'vuex'
    import dynamicsize from '@/utils/dynamicsize'
const style=dynamicsize.dynamicWH(
    {normal:(668+350)+30,max:1694+411+30,min:(668+350)+30},
    // {normal:213*2+20,max:297*2+20,min:208*2+20},
)
const dynamicWH=(width,height)=>{
   return dynamicsize.dynamicWH(width,height).value
}
</script>
<style scoped>
.play {
    height: 1000px;
    /* background-color: orange; */

}
.play .main {
    /* background-color: palevioletred; */
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: space-between;
}

</style>