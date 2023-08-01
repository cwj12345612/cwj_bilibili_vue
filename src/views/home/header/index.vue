<template>
<div class="king">
    <img src="@/assets/images/header.png" alt="">
    <a class="logo" href="/">
        <i class="colourless bilibili" style=" font-size: 50px; cursor: pointer;"></i>
    </a>
</div>

</template>
 
<script setup>

import {

    } from 'vue'

import {

    } from 'vuex'

</script>
<style scoped>
.king {
    width: 100%;
    position: relative;
    /* z-index: -1;     */
}
img {
    width: 100%;

}
.logo {
    cursor: pointer;
    height: 78px;
    width: 162px;
    position: absolute;
    left: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
   
    bottom: 0;
    /* z-index: 1; */
    /* background-color: aqua; */
    color: #00aeec;
}
</style>