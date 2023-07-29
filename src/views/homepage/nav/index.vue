<template>
<div class="nav" :style="`height: ${height};`">
<homepage_nav_left></homepage_nav_left>
</div>
</template>
 
<script setup>
import homepage_nav_left from './left.vue'
import {
ref,
computed
    } from 'vue'

import {
useStore
    } from 'vuex'
import num from '@/utils/number.js'

const store  =useStore();
const height=computed(()=>{
  const h=  store.state.pageconfig.windows.clientHeight * (110 / 1425)
  return num.scopenumber(h,130,100)+'px';
})

</script>
<style scoped>
.nav{
    background-color: palevioletred;
    padding: 0 64px;
    width: 100%;
    max-height: 130px;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>