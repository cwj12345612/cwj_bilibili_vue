<template>

<div class="left" :style="style">

</div>
</template>
 
<script setup>

import {
reactive,
computed,
ref
    } from 'vue'

import {
useStore
    } from 'vuex'
const store=useStore()
import dynamic from '@/utils/dynamic';
const style=computed(()=>{
    // const h=store.state.pageconfig.windows.clientWidth * (210 / 1425)
    // console.log(h)
    return dynamic.dynamicsize(
        {normal:210,max:234+20,min:153}
    )
})
</script>
<style scoped>
.left{
    min-width: 154px;
    max-width: calc(234px + 20px);
    height: 100%;
    background-color: teal;
    display: flex;
    justify-content: space-around;
}
</style>