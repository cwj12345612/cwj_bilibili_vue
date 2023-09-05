<template>
    <div id="spacepage" :style="pageconfigStore.dynamicWH({ normal: 1283, max: 1283, min: 1101 })">
        <div class="header">
            <button class="visualangle">
                <span>视角: </span>
                <span>我自己</span>
                <i class="colourless xialada"></i>
            </button>
        </div>
<div class="userinfo">

</div>
    </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>
#spacepage {

    height: 1000px;
    background-color: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.header {
    width: 100%;
    height: 192px;

    background: url('../../assets/images/spacepage/header_bigpic.webp') no-repeat ;
    background-size:cover ;
    position: relative;
   padding-left: 20px;
}
.visualangle {
    position: absolute;
    top: 15px;
    right: 60px;
   background: var(--transparency);
   color: #fff;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: none;
    border-radius: 4px;

}
.visualangle:hover{
    background: rgba(0, 0, 0, 0.6);
}
.visualangle span{
    margin-right: 5px;
}

</style>
