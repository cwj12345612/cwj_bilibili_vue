<template>
<div class="title" :style="style">
<div class="detailtitle">

</div>
<div class="athor" ></div>
</div>
</template>
 
<script setup>

import {

    } from 'vue'

import {

    } from 'vuex'
    import dynamicsize from '@/utils/dynamicsize'
const style=dynamicsize.dynamicWH(
    undefined,
    {normal:104,max:108,min:104},
)

</script>
<style scoped>
.title {
    background-color: blueviolet;
}
.title .detailtitle {
    float: left;

}
.title .athor {
    float: right;
    background-color: cadetblue;
    height: 100%;
    width: 350px;
}
</style>
