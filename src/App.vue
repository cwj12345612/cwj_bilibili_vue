<template>
  <cwj_header></cwj_header>
  <router-view></router-view>
</template>
<script setup>
// #region 引入组件
import cwj_header from '@/components/header'
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
<style scoped></style>
