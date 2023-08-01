<template>

<div class="slideshow" :style="style">
<homepage_slideshow_carousel class="carousel"></homepage_slideshow_carousel>
<homepage_slideshow_videolist class="videolist"></homepage_slideshow_videolist>
</div>
</template>
 
<script setup>
import homepage_slideshow_carousel from './carousel.vue'
import homepage_slideshow_videolist from './videolist.vue'
import {

    } from 'vue'

import {

    } from 'vuex'
    import dynamicsize from '@/utils/dynamicsize'
const style=dynamicsize.dynamicWH(
    {normal:1305,max:1980,min:1020},
    {normal:213*2+20,max:297*2+20,min:208*2+20},
)
</script>
<style scoped>
.slideshow {
    /* background-color: orange; */
    max-width: 1980px;
   min-width: 1020px;
   display: grid;
   grid-gap: 20px;
   grid-template-columns: repeat(5,1fr);
   grid-template-rows: repeat(2,1fr);

}
.carousel {
    /* background-color: aqua; */
    grid-column: span 2;
    grid-row: span 2;
    /* height: 200px; */
}
.videolist {
    /* background-color: cadetblue; */
    grid-row: span 2;
    grid-column: span 3;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(2,1fr);
}
</style>