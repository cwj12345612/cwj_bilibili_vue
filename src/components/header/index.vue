<template>
<header :class="[headerclass.scroll,headerclass.pagename]">
   <header_left v-if="show.left" ></header_left>
<header_search v-if="show.search"></header_search>
<header_right v-if="show.right"></header_right>
</header>

</template>
 
<script setup>
import header_left from './left.vue'
import header_search from '@/components/search'
import header_right from './right.vue'
import {
reactive,
ref,
onMounted,
computed
    } from 'vue'

import {
useStore,
    } from 'vuex'
   const store=useStore()
const headerclass=reactive({
        // pagename:store.state.pageconfig.nowpage.name,
        // scroll:false,
    })  
    headerclass.pagename=computed(()=>{
        return store.state.pageconfig.nowpage.name
    })
    headerclass.scroll=computed(()=>{
        return store.state.pageconfig.nowpage.isscroll ? 'scroll' :undefined
    })
const show=reactive({
    left:true,
    search:true,
    right:true,
})
show.search=computed(()=>{
    if(store.state.pageconfig.nowpage.name!=='searchpage') return true
    if(headerclass.scroll) return true
    return false
})
show.left =computed(()=>{
    if(store.state.pageconfig.nowpage.name!=='searchpage') return true
    if(!headerclass.scroll) return true
    return false
})
show.right=computed(()=>{
    if(store.state.pageconfig.nowpage.name!=='searchpage') return true
    if(!headerclass.scroll) return true
    return false
})
</script>
<style scoped>
header {
    /* background-color: palevioletred; */
    height: 64px;
    width: 100%;
    max-width: 2560px;
    min-width: 1380px;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
}
</style>
<style scoped src="@/assets/css/header/header.css"></style>