<template>
<div class="head" :style="{height:cl.height}" >

<img src="@/assets/images/header.png" alt="">
<div class="logo">
    <i class="colourless colourlessbilibili" style=" font-size: 35px;color: #f2f3f4;"></i>
</div>
</div>
</template>
 
<script setup>

import {
reactive,
computed
    } from 'vue'

import {
useStore
    } from 'vuex'
    const store=useStore()
    import num from '@/utils/number'
const cl=reactive({
    height:0,
})
cl.height=computed(()=>{
   const h= store.state.pageconfig.windows.clientHeight * (155 / 1425)
   
   return num.scopenumber(h,155,240)+'px';
})

</script>
<style scoped>
.head{
    position: relative;
    max-height: 240px;
    min-height: 155px;
    /* height: 155px; */
    width: 100%;
    
}
.logo {
    position: absolute;
   
    /* background-color: aqua; */

    width: 10%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10%;
  left: 24px;
 
}
</style>