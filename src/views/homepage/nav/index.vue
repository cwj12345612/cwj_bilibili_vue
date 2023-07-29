<template>
    <div class="nav" :style="style">
        <homepage_nav_left></homepage_nav_left>
    </div>
</template>
 
<script setup>
import homepage_nav_left from './left.vue'
import {
    ref,
    reactive,
    watch,
    computed
} from 'vue'

import {
    useStore
} from 'vuex'
import dynamic from '@/utils/dynamic'

const store = useStore();

const style=computed(()=>{
    return dynamic.dynamicsize(
        undefined,
        {normal:110,max:130,min:100}
    )
})
// watch(()=>style,()=>{
//     console.log('监听'+store)
//     console.log('监听'+JSON.stringify(style.value))
// },{immediate:true,deep:true})
</script>
<style scoped>
.nav {
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