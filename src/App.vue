<template>
 <index 
 
 v-if="route.name!='admindev'"

 ></index>

 <!-- #region 正常使用时删除 -->
 <router-view v-if="route.name=='admindev'"></router-view>
 <!-- #endregion 正常使用时删除 -->

</template>
<script setup>
// #region 引入组件
import index from './views/index.vue'
//#endregion

import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()

onMounted(() => {
 
  //初始化页面
  pageconfigStore.initproperty()
})
</script>
<style >

</style>
