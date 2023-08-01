<template>
<div class="more" :style="style">
<homepage_more_leftlist class="left"></homepage_more_leftlist>
<homepage_more_rightlist class="right"></homepage_more_rightlist>

</div>

</template>
 
<script setup>
import homepage_more_leftlist from './leftlist.vue'
import homepage_more_rightlist from './rightlist.vue'
import {

    } from 'vue'

import {

    } from 'vuex'
    import dynamicsize from '@/utils/dynamicsize'
const style=dynamicsize.dynamicWH(
    {normal:1305,max:1980,min:1020},
    // {normal:213*2+20,max:297*2+20,min:208*2+20},
)
</script>
<style scoped>
.more {
    margin-top: 20px;
    /* background-color: orange; */
    display: grid;
    /* height: 500px; */
   grid-gap: 20px;
   grid-template-columns: repeat(5,1fr);
   /* grid-template-rows: repeat(2,1fr); */
}
.more .left {
    /* background-color: chocolate; */
    grid-column: span 4;
    
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 20px;

}
.more .right {
    
    /* background-color: palevioletred; */
}
</style>