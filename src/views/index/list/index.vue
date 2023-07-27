<template>
 <div class="list" :style="`margin-top: ${margintop};`">
    <list_left ></list_left>
    <list_right  ></list_right>
 </div>
</template>
 
<script setup>
 import list_left from './left.vue'
 import list_right from './right.vue'
 import {
    reactive,
    ref,
    watch,
    onMounted,
    computed
 }from 'vue'

import { useStore } from 'vuex';
const store=useStore()
/*
   height:56vh;
   max-height: 780px;
   min-height: 460px;
    height: '47%'
*/
const  margintop=computed(()=>{
   const max=11
  const mt= store.state.pageconfig.windows.clientWidth * 0.03
      // console.log(mt);
      return mt+'px';
   })

</script>
<style scoped>
.list {
   /* margin-top:4vw; */
    display: flex;
    justify-content: space-between;
    padding: 0 64px;
    width: 100%;
    /* 没有高度 */
    /* height: 100vh; */
    /* background-color: teal; */
}
</style>