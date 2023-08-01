<template>
<!-- 首页 -->
<div id="homepage">
    <homepage_header></homepage_header>
    <!-- <homepage_nav></homepage_nav> -->
    <homepage_slideshow></homepage_slideshow>
    <homepage_more></homepage_more>
</div>
</template>
 
<script setup>

import homepage_header from './header'
import homepage_nav from './nav'
import homepage_slideshow from './slideshow'
import homepage_more from './more'
</script>
<style scoped>
#homepage{
    position: relative;
    z-index: -1;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    width: 100%;
}
</style>