<template>
    <ul class="leftlist" 
    :style="pageconfigStore.dynamicWH({ normal: 458, max: 537, min: 423 })"
    :class="pageconfigStore.globalclass"
    >
    <li v-for="li in list" :key="li.id"
    :class="pageconfigStore.globalclass"
    >
        <a class="item" :href="li.href"
        :class="pageconfigStore.globalclass"
        >
                <i v-if="li.icon" :class="li.icon"></i>
                <span>{{ li.title }}</span>
            </a>

    </li>
    </ul>
</template>
<script setup>
// #region  引入组件

//  #endregion
// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion
 // #region  模拟数据 mockjs
const list=reactive([
{ id: 1, icon: 'colourless bilibili', title: '首页', href: '/' },
    { id: 2, title: '番剧', href: '#' },
    { id: 3, title: '直播', href: '#' },
    { id: 4, title: '游戏中心', href: '#' },

    { id: 7, title: '赛事', href: '#' },
    { id: 8, title: '纪录片', href: '#' },
    { id: 9, title: 'LPL', href: '#' },
    { id: 10, icon: 'colourless xiazai', title: '下载客户端', href: '#' },
])


// #endregion
</script>
<style scoped>
/* #region 默认状态 */
.leftlist {
    height: 100%;
    /* background-color: plum; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
li {
    height: 100%;
    
}
/* 默认情况 */
 .item{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #ffffff;
    transition: all 0.3s;
}
.item:hover{
    transform: translateY(-10%);
}
.item.scroll{
    color: #18191c;
}
.item.searchpage{
    color: #18191c;
}
li:first-child.searchpage i {
    color: #00aeec;
}
li:first-child.scroll i {
    color: #00aeec;
}
/* #endregion */
</style>
