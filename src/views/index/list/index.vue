<template>
 <div class="list">
    <list_left :videoconfig="videoconfig"></list_left>
    <list_right  :videoconfig="videoconfig"></list_right>
 </div>
</template>
 
<script setup>
 import list_left from './left.vue'
 import list_right from './right.vue'
 import {
    reactive,
    ref,
    watch,
    onMounted
 }from 'vue'
import { useStore } from 'vuex';
const store=useStore()
/*
   height:56vh;
   max-height: 780px;
   min-height: 460px;
    height: '47%'
*/
const videoconfig = reactive({})

const setWh=()=>{
   const val=store.state.pageconfig.windows
   videoconfig.width=((val.clientWidth - 2*64) * 0.6 * 0.32)+'px'
   const nh=  val.clientHeight  * 0.56 * 0.33
   console.log(nh  )
   videoconfig.height= ((nh < 460 ) ? (460 * 0.47) :((nh > 780) ? ( 780 * 0.47) : nh)) +'px';
   // console.log(videoconfig.height)

  
}

onMounted(setWh)
watch(()=>store.state.pageconfig.windows,setWh,{deep:true})
</script>
<style scoped>
.list {
   margin-top: 3vh;
    display: flex;
    justify-content: space-between;
    padding: 0 64px;
    width: 100%;
    /* 没有高度 */
    /* height: 100vh; */
    /* background-color: teal; */
}
</style>