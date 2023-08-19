<template>

<cwj_header></cwj_header>
 <router-view></router-view>

</template>
<script setup>
// #region 引入组件
import cwj_header from '@/components/header'

//#endregion

import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'
import {useStore,mapActions,mapGetters,mapMutations,mapState} from 'vuex'
import {useRoute,useRouter} from 'vue-router'
const store=useStore()
const route=useRoute()
const router=useRouter()

</script>
<style scoped>

</style>
