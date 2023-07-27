<template>
 <div class="slideshowvideos" >
    <slideshowvideos_left></slideshowvideos_left>
    <slideshowvideos_right ></slideshowvideos_right>
 </div>
</template>
 
<script setup>
import slideshowvideos_left from './left.vue'
 import slideshowvideos_right from './right.vue'


</script>
<style scoped>
.slideshowvideos{
    /* width: 100%; */
    padding: 0 64px;
     /* height:56vh; */
   max-height: 780px;
   min-height: 460px;
   /* flex-direction: row-reverse; */
    /* background-color: palevioletred; */
    display: flex;
    justify-content: space-between;
}
</style>