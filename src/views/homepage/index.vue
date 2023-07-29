<template>
<!-- 首页 -->
<div id="homepage">
 <homepage_head></homepage_head>
 <homege_nav></homege_nav>
</div>
</template>
 
<script setup>
import homepage_head from './head.vue'
import homege_nav from './nav/index.vue'
import {

    } from 'vue'

import {
useStore
    } from 'vuex'
const store=useStore()

</script>
<style scoped>
#homepage{
    position: relative;
    z-index: -1;
  
    width: 100%;
    
    background-color: chocolate;
    height: 500px;
}
</style>