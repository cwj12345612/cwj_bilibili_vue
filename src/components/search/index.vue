<template>
<div class="searchinput" :class="[searchclass.pagename,searchclass.scroll]">
    <input type="search">
    <i class="colourless colourlessfaxianweixuanzhongxuanzhong" style="cursor: pointer;font-size: 30px;" v-if="searchclass.pagename!='searchpage' || (searchclass.pagename=='searchpage' && !searchclass.scroll)"></i>
    <button v-if="!(searchclass.pagename!='searchpage' || (searchclass.pagename=='searchpage' && !searchclass.scroll))">搜索</button>
</div>
</template>
 
<script setup>

import {
reactive,
ref,
computed,
onMounted
    } from 'vue'

import {
useStore
    } from 'vuex'
    const store=useStore()
    const searchclass=reactive({
        // pagename:'',
    })
    searchclass.pagename=computed(()=>{
        return store.state.pageconfig.nowpage.name
    })
    searchclass.scroll=computed(()=>{
        return store.state.pageconfig.nowpage.isscroll ? 'scroll' :undefined
    })
</script>
<style scoped>
.searchinput {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25%;
    height: 65%;
    
  background-color: #f2f3f4;
  border-radius: 8px;
  overflow: hidden;
}
input {
    height: 70%;
    width: 80%;
   border: none;
   /* background-color: #f2f3f4; */
   background-color: #f2f3f4;
}
</style>

<style src="@/assets/css/search/search.css" scoped></style>