<template>
<div class="live">
<div class="saishi" :style="`height: ${h};`">
<categorylist_list style="width: 100%;"></categorylist_list>
</div>
<!-- <div class="youxi">
    <categorylist_list style="   width: calc(40% + (60% * 0.32 * 2 + (60% * 0.02)) );;"></categorylist_list>
    <categorylist_hot style=" width: calc(60% * 0.32);"></categorylist_hot>
</div> -->
</div>
</template>
 
<script setup>
import categorylist_list from './list.vue';
import categorylist_hot from './hot.vue'
import {
computed
    } from 'vue'

import {
useStore
    } from 'vuex'
    const store =useStore()
    const h=computed(()=>{
    // console.log(typeof w.value)
    let temp=store.state.pageconfig.windows.clientWidth * 0.6 * 0.29  *0.9
    // console.log(temp);
    temp = (temp<(460*0.47) ? (460 * 0.47) : (temp>(780*0.47) ?(780*0.47) :temp))
    // console.log(temp);
    // console.log(hh)
    return (temp + (0.2*temp))+'px'
})
</script>
<style scoped>
.live {
    flex-wrap: wrap;
    display:flex; 
    width: 100%;
    padding: 0 64px;
    /* height: 50vw; */
    /* background-color: orange; */
}
.saishi {
    width: 100%;
    /* background-color: palevioletred; */
  
}

</style>