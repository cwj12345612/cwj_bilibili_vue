<template>
<div class="nav" :style="style" >
<homepage_nav_left></homepage_nav_left>
<homepage_nav_navlist></homepage_nav_navlist>
<homepage_nav_right></homepage_nav_right>
</div>

</template>
 
<script setup>
import homepage_nav_left from './left.vue'
import homepage_nav_navlist from './navlist.vue'
import homepage_nav_right from './right.vue'
import {
reactive,
ref,
onMounted,
computed
    } from 'vue'

import {
useStore
    } from 'vuex'
    const store = useStore()
import dynamicsize from '@/utils/dynamicsize'
const style=dynamicsize.dynamicWH(
    {normal:1305,max:1980,min:1020},
    {normal:110,max:130,min:100},
)
</script>
<style scoped>
.nav{
    /* background-color: cadetblue; */
  
   max-width: 1980px;
   max-height: 130px;
   min-width: 1020px;
   min-height: 100px;
   display: flex;
   align-items: center;
   justify-content: space-between;
}
</style>