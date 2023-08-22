<template>
<div class="playpage_rightlist">
<rightlist_upZhu></rightlist_upZhu>
</div>
</template>
<script setup>
// #region  引入组件
import rightlist_upZhu from './upZhu.vue'
//  #endregion

// #region 引入vue pinia 路由
import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import {useRoute,useRouter} from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route=useRoute()
const router=useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}

//#endregion

</script>
<style scoped>
.playpage_rightlist{
    background-color: blueviolet;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}



</style>
    