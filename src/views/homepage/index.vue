<template>
<div id="homepage">
    
</div>
</template>
<script setup>
// #region  引入组件

//  #endregion

import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'

import {useRoute,useRouter} from 'vue-router'

const route=useRoute()
const router=useRouter()

</script>
<style scoped>
#homepage{
  width: 100%;
  
    height: 200px;
    background-color: thistle;
    
}
</style>
