<template>
<div class="carousel">

    <ul class="imgs">
            <img src="@/assets/images/1.webp" alt="">
    </ul>
</div>
</template>
<script setup>
// #region  引入组件

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
.carousel{
    grid-column: span 2;
    grid-row: span 2;
    width: 100%;
    border-radius: var(--border-radius-max);
    overflow: hidden;
    height: calc(calc(calc(100% - 20px) / 2) * 1.6 + 20px);
   background: var(--transparency);
}
.carousel .imgs{
    width: 100%;
    height: 80%;
}
</style>
