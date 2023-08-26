<template>
<div id="animepage">
<animepage_banner></animepage_banner>
</div>
</template>
<script setup>
// #region  引入组件
import animepage_banner from './banner'
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
#animepage{
width: 100%;
height: 1000px;
background-color: orange;
}
</style>
