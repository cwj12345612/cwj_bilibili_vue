<template>

<header :style="style">
   <head_leftlist></head_leftlist>
   <head_rightlist></head_rightlist>
</header>
</template>
 
<script setup>
import head_leftlist from  './leftlist.vue'
import head_rightlist from './rightlist.vue'
import {
reactive,
onMounted,
computed
    } from 'vue'
import {
useStore,mapState
} from 'vuex'
import dynamicsize from '@/utils/dynamicsize'

const style= dynamicsize.dynamicWH(
        {normal:1425,max:2512+24*2,min:1012+24*2}
)

</script>

<style scoped>
header {
    width: 100%;
    padding: 0 24px;
    height: 64px;
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: calc(2512px + 24px * 2);
    min-width: calc(1012px + 24px * 2);
    /*  */
}
</style>