<template>
<div class='header_search'
:style="pageconfigStore.dynamicWH({ normal: pageconfigStore.scroll == 0 ? 359 : 283, max: (2 + 8) * 2 + 424, min: (2 + 8) * 2 + 179 })"
>
<input type="search">

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

//#endregion

</script>
<style scoped>
.header_search{
padding-left: 4px;
height: 40px;
border: 1px solid #ffffff;
border-radius: var(--border-radius-max);
overflow: hidden;
background-color: aqua;

display:flex;
align-items: center;
justify-content: space-between;
}
.header_search input{
    height: 80%;
    width: 90%;
background-color: #ffffff;
}
</style>
