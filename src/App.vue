<template>
  <bilibili_head></bilibili_head>
  <router-view />
</template>
<script setup>
import bilibili_head from '@/components/header/index.vue'
import {
  onMounted,
} from 'vue'
import {
  useStore,
} from 'vuex'
const store = useStore()
onMounted(() => {
 
    setTimeout(() => {
      store.commit('pageconfig/initWindowsHeightWidth')
    }, 100);
 
 
})
</script>
<style scoped>
.app {

  position: relative;
}
</style>
