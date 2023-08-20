<template>
<div class="homepage_banner"
:style="pageconfigStore.dynamicWH(undefined,{normal:155,max:240,min:155})"
>
<img src="@/assets/images/header.png" alt="">
<a class="logo" href="/"
:style="pageconfigStore.dynamicWH(undefined,{normal:77.5,max:120,min:77.5})"
>
        <i class="colourless bilibili" ></i>
    </a>
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
.homepage_banner{
    width: 100%;
    position: relative;
}
.homepage_banner .logo{
    display: block;
    position: absolute;
    bottom: 0;
    width: 180px;
    left: 100px;
    color: #ffffff;
}
.homepage_banner .logo i{
     font-size: 50px; 

}
</style>
