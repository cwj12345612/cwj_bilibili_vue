<template>
  <bilibili_header></bilibili_header>
 <router-view></router-view>
 <!-- <bilibili_footer></bilibili_footer> -->
</template>
<script setup>
import bilibili_header from '@/components/header'
import bilibili_footer from '@/components/footer'
import {
  onMounted
} from 'vue'
import {
useStore
} from 'vuex'
const store=useStore()
onMounted(()=>{
  store.commit('pageconfig/initWindowsHeightWidth')
})
</script>
<style scoped>

</style>
