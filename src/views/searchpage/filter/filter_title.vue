<template>
    <ul class="searchpage_filtertitle">
        <li 
        v-for="index in mock({'num|7':7}).num" 
        :class="index == 1 ? 'checked' : undefined">
            <a href="#">
                <span class="title">{{ mock('@cword(2,3)') }}</span>
                <span class="count" v-if="index != 1">99+</span>
            </a>
        </li>
    </ul>
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
.searchpage_filtertitle {
    width: 100%;
    height: 48px;
    /* background-color: goldenrod; */
    border-bottom: 2px solid #f1f2f3;
   display: flex;
}
.searchpage_filtertitle li:first-child{
   
    padding-left: 0;
}
.searchpage_filtertitle li{
   padding: 0 24px;
}
.searchpage_filtertitle li a {

    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.searchpage_filtertitle li a span {
    color: #61666d;
}

.searchpage_filtertitle li a .title {
    font-size: 16px;
    margin-right: 5px;
    height: 90%;
    display: flex;
    align-items: center;
}

.searchpage_filtertitle li a .count {
    font-size: 12px;
    border-radius: 50%;
    background-color: #f1f2f3;
}

.searchpage_filtertitle li.checked a .title {
    color: #0aaeec;
    border-bottom: 2px solid #0aaeec;
}

.searchpage_filtertitle li:hover .title {
    color: #0aaeec;
}
</style>
