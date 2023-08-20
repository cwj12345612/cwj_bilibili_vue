<template>
    <header 
    :style="pageconfigStore.dynamicWH({normal:1377+24*2,max:2512+24*2,min:1012+24*2})"
    >
      
        <cwj_header_leftlist></cwj_header_leftlist>
    </header>
</template>
<script setup>
//#region
import cwj_header_leftlist from './leftlist.vue'
//#endgion
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
onMounted(()=>{

})
</script>
<style scoped>
header {
    /* background: var(--transparency); */
    background-color: coral;

   padding: 0 24px;
    height: 64px;

  display: flex;
  align-items: center;

  /*  */
  position: fixed;
}
</style>
