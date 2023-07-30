<template>
    <header :style="style">
        <head_leftlist></head_leftlist>
        <head_rightlist></head_rightlist>
    </header>
</template>
 
<script setup>
import head_leftlist from './leftlist.vue'
import head_rightlist from './rightlist.vue'
import {
    reactive,
    onMounted,
    computed, ref
} from 'vue'
import {
    useStore, mapState
} from 'vuex'
import dynamicsize from '@/utils/dynamicsize'
const translateY = ref(0)
const style = computed(() => {
    return {
        ...dynamicsize.dynamicWH(
            { normal: 1425, max: 2512 + 24 * 2, min: 1012 + 24 * 2 }
        ).value,
        ...{ 'transform': `translateY(${translateY.value}px)` },
    }
})
onMounted(() => {
    window.addEventListener('scroll', () => {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        translateY.value = scrollTop
        // console.log(scrollTop)
        // console.log(JSON.stringify(style.value))
    })
})


</script>

<style scoped>
header {
    position: absolute;
    /* transform: translateY(); */
    width: 100%;
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