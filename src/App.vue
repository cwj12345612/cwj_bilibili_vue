<template>
  <bilibili_header></bilibili_header>

 <router-view></router-view>
 <!-- <bilibili_footer></bilibili_footer> -->
</template>
<script setup>
import bilibili_header from '@/components/header'
import {
computed,
ref,
reactive,
onMounted
} from 'vue'
import {
  useStore
} from 'vuex'
const store=useStore()
onMounted(() => {
  store.commit('pageconfig/initnowpagewidth')
  store.commit('pageconfig/listenerscroll')
})
</script>
<style scoped>

</style>
