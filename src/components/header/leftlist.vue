<template>
<div class="leftlist" >

</div>
</template>
<script setup>
// #region  引入组件

//  #endgion

import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig'
import {useRoute,useRouter} from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route=useRoute()
const router=useRouter()

</script>
<style scoped>
.leftlist{

}
</style>
