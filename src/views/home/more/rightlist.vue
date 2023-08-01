<template>
<ul>

<li>
    <li v-for="index in parseInt(33/4)+1">
        <homepage_more_rightlist></homepage_more_rightlist>
    </li>
</li>
</ul>

</template>
 
<script setup>
import homepage_more_rightlist from '@/components/card/categorycard.vue'
import {

    } from 'vue'

import {

    } from 'vuex'

</script>
<style scoped>
ul li{
    border-radius: 8px;
    width: 100%;
    /* background-color: #f2f3f4; */
    /* background-color: palevioletred; */
    /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    overflow: hidden; 
  
    }
ul li:nth-child(n+2){
    margin-top: 20px;
}
</style>