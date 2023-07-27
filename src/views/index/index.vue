<template>
      <div class="index">
          <index_header></index_header>
          <navigation></navigation>
            <slideshowvideos></slideshowvideos>
            <!-- <list></list> -->
            <!-- <categorycard></categorycard> -->
      </div>
</template>
 
<script setup>
import {
      ref,
      reactive
} from 'vue'
 import index_header from './header/index.vue'
import navigation from './navigation/index.vue'
import slideshowvideos from './slideshowvideos/index.vue'
import list from './list/index.vue'
// const big_pic= require('@/assets/images/header.png')

import categorycard from '@/components/video/categorycard.vue'
</script>
<style  scoped>
.index {
      /* position: absolute; */
      /* z-index: -1; */
      width: 100%;
      /* background-color: blueviolet; */
}


</style>