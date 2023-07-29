<template>

<div class="left" :style="`width: ${width};`">

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
import num from '@/utils/number'
const width=computed(()=>{
    const h=store.state.pageconfig.windows.clientWidth * (210 / 1425)
    // console.log(h)
    return num.scopenumber(h,154,234+20)+'px'
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