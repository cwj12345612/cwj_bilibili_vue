<template>
    <header :style="style" :class="Object.values(ca) ">
        <head_leftlist :ca="ca" v-if="ca.name!=='searchpage' || !ca.scroll" ></head_leftlist>
        <head_search :ca="ca" v-if="ca.name!='searchpage'"></head_search>
   
        <head_search_search :ca="ca" v-if="store.state.pageconfig.nowpage.name==='searchpage' && ca.scroll"></head_search_search>
   
        <head_rightlist :ca="ca" v-if="ca.name!=='searchpage' || !ca.scroll"></head_rightlist>
    </header>
</template>
 
<script setup>
import head_leftlist from './leftlist.vue'
import head_search from '../search/head_search.vue'
import head_search_search from '@/components/search/searchpage_search.vue'
import head_rightlist from './rightlist.vue'
import {
    reactive,
    onMounted,
    computed, ref
} from 'vue'
import {
    useStore, mapState
} from 'vuex'
const store = useStore()
import dynamicsize from '@/utils/dynamicsize'
const translateY = ref(0)
const style = computed(() => {
    return {
        ...dynamicsize.dynamicWH(
            { normal: 1425, max: 2512 + 24 * 2, min: 1012 + 24 * 2 }
        ).value,
    }
})
onMounted(() => {
    window.addEventListener('scroll', () => {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        translateY.value = scrollTop
    })
})
const scrollTop=ref(0);
onMounted(()=>{
    window.addEventListener('scroll',()=>{
       scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop;
    })
})
const ca = computed(()=>{
    const cl={};
         const name = store.state.pageconfig.nowpage.name
     cl.name=name
     if (scrollTop.value != 0) {
            cl.scroll = 'scroll'
        } else {
            cl.scroll = null
        }
        // cl.scroll=null
    return cl
})
</script>

<style scoped>
header {
    position: absolute;
    /* transform: translateY(); */
    /* width: 100%; */
    padding: 0 24px;
    height: 64px;
    /* background-color: blueviolet; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: calc(2512px + 24px * 2);
    min-width: calc(1012px + 24px * 2);
    /*  */
}

</style>

<style scoped src="@/assets/css/head/head.css"></style>