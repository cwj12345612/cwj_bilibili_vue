<template>
    <header 
    :style="style"
    :class="pageconfigStore.globalclass"
    >
        <cwj_header_leftlist></cwj_header_leftlist>
        <cwj_header_search></cwj_header_search>
        <cwj_header_rightlist></cwj_header_rightlist>
    </header>
</template>
<script setup>
//#region 引入组件
import cwj_header_leftlist from './leftlist.vue'
import cwj_header_search from '@/components/search/header_search.vue'
import cwj_header_rightlist from './rightlist.vue'
//#endgion
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount} from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
const  style=computed(()=>{
    
    return {
        ...pageconfigStore.dynamicWH({normal:1377+24*2,max:2512+24*2,min:1012+24*2}),
        // top: pageconfigStore.scroll +'px' 
    }
})
</script>
<style scoped>
header {
z-index: 10086;
   padding: 0 24px;
    height: 64px;
/* 弹性布局flex */
  display: flex;
  align-items: center;
    justify-content: space-between;
  /*  */
 /* 临时属性 开发用 */
/* background-color: coral; */
  
}
header.homepage{
    position: absolute;
}
header.homepage.scroll{
    background-color: #ffffff;
}
header.searchpage{
position: 'none';
background-color: #ffffff;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
</style>
