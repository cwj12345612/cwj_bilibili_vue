<template>

<div class="play" :style="style">
<play_title></play_title>
</div>
</template>
 
<script setup>
import play_title from './title'
import {

    } from 'vue'

import {

    } from 'vuex'
    import dynamicsize from '@/utils/dynamicsize'
const style=dynamicsize.dynamicWH(
    {normal:1405-155,max:2540-155,min:1080-155},
    // {normal:213*2+20,max:297*2+20,min:208*2+20},
)
</script>
<style scoped>
.play {

    height: 1000px;
    background-color: orange;

}
</style>