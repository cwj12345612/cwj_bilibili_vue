<template>
<ul class="left" :style="style" >
    <li v-for="li in list">
<a class="item" :href="li.href">
    <i v-if="li.icon" :class="li.icon"></i>
    <span>{{ li.title }}</span>
</a>
</li>
</ul>

</template>
 
<script setup>

import {
reactive,
onMounted,
computed
    } from 'vue'
import {
useStore,mapState
} from 'vuex'
import dynamicsize from '@/utils/dynamicsize';
const store=useStore()
const style=dynamicsize.dynamicWH(
    {normal:527,max:611,min:480}
)
const list=reactive( [
                { id: 1, icon: 'colourless bilibili', title: '首页', href: '#' },
                { id: 2, title: '番剧', href: '#' },
                { id: 3, title: '直播', href: '#' },
                { id: 4, title: '游戏中心', href: '#' },
                { id: 5, title: '会员购', href: '#' },
                { id: 6, title: '漫画', href: '#' },
                { id: 7, title: '赛事', href: '#' },
                { id: 8, title: '纪录片', href: '#' },
                { id: 9, title: 'LPL', href: '#' },
                { id: 10, icon: 'colourless xiazai', title: '下载客户端', href: '#' },
            ])

</script>
<style scoped>
.left {
    min-width: 423px;
    max-width: 611px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: teal;
}
.item {
    font-size: 14px;
    display: block;
    transition: all 0.3s;
}
.item:hover {
    transform: translateY(-30%);
}
</style>
<style scoped src="@/assets/css/head/leftlist.css"></style>