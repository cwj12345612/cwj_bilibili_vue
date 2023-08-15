<template>
<ul class="left" :style="style" :class="Object.values(ca)">
    <li v-for="(li,index) in list"  @mousemove.stop="show" @mouseout="none">
<a class="item" :href="li.href">
    <i v-if="li.icon" :class="li.icon"></i>
    <span>{{ li.title }}</span>
</a>
<div  class="card" 
v-if="index!==0"
>
<div class="left">

</div>
<div class="right">

</div>
</div>
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
defineProps({
    ca:Object
})
const style=dynamicsize.dynamicWH(
    {normal:458,max:437,min:423}
)
const list=reactive( [
                { id: 1, icon: 'colourless bilibili', title: '首页', href: '/' },
                { id: 2, title: '番剧', href: '#' },
                { id: 3, title: '直播', href: '#' },
                { id: 4, title: '游戏中心', href: '#' },
               
                { id: 7, title: '赛事', href: '#' },
                { id: 8, title: '纪录片', href: '#' },
                { id: 9, title: 'LPL', href: '#' },
                { id: 10, icon: 'colourless xiazai', title: '下载客户端', href: '#' },
            ])
            // document.querySelector
const show=(e)=>{
const card=e.currentTarget.querySelector('.card');
if(!card) return
card.style.display='grid'
}
const none=(e)=>{
    const card=e.currentTarget.querySelector('.card');
    if(!card) return
card.style.display='none'
}
</script>
<style scoped>

.left {
    flex-grow: 0;
  flex-shrink: 0;
    min-width: 423px;
    max-width: 611px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: teal; */
}
.left li {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left .card{
    display: none;
    transition: all 0.4s;
    width: 507px;
    height: 262px;
    background-color: palegreen;
    position: absolute;
    top: 100%;
    left: 0%;
  padding: 20px;
border-radius: 8px;

grid-template-columns: 70% 30%;
grid-column-gap: 5px;
}
.left .card .left{
    height: 100%;
background-color: olivedrab;
}
.left .card .right{
    height: 100%;
    background-color: teal;
}
.item {
    font-size: 14px;
    display: block;
    transition: all 0.3s;
}
.left li:hover .item {
    transform: translateY(-30%);
}


</style>
<style scoped src="@/assets/css/head/leftlist.css"></style>