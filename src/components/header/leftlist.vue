<template>
    <ul class="left" :style="style" :class="Object.values(ca)">
        <li v-for="(li, index) in list" @mousemove.stop="show" @mouseout="none">
            <a class="item" :href="li.href">
                <i v-if="li.icon" :class="li.icon"></i>
                <span>{{ li.title }}</span>
            </a>
            <div class="card" v-if="index!== 0">
                <!-- <div class="left">

                </div>
                <div class="right">

                </div> -->
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
    useStore, mapState
} from 'vuex'
import dynamicsize from '@/utils/dynamicsize';
const store = useStore()
defineProps({
    ca: Object
})
const style = dynamicsize.dynamicWH(
    { normal: 458, max: 437, min: 423 }
)
const list = reactive([
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
const show = (e) => {
    const card = e.currentTarget.querySelector('.card');
    if (!card) return
    // card.style.display='grid'
    card.style.display='block'
    card.style.animationPlayState='running';
}
const none = (e) => {
    const card = e.currentTarget.querySelector('.card');
    if (!card) return
    card.style.display='none'
    card.style.animationPlayState='paused'
}
</script>
<style scoped>
@keyframes showcard {
    /* from {
        display: none;
        width: 0;
        height: 0;
    } */
    10%{
        height: calc(100px * 0.1);
    }
    25% {
        display: block;
        /* width: calc(507px ); */
        height: calc(100px * 0.25);
    }
    40%{
        height: calc(100px * 0.4);
    }
    50% { 
        /* width: calc(507px ); */
        height: calc(100px * 0.5);
    }
    60%{
        height: calc(100px * 0.6);  
    }
    75% {
        display: block;
        /* width: calc(507px ); */
        height: calc(100px * 0.75);
    }
    85%{
        height: calc(100px * 0.8);
    }
    to {
        display: block;
        /* width: calc(507px * 1); */
        height: calc(100px * 1);
        padding: 20px;
        border-radius: 8px;
    }
}

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

.left .card {
    animation-fill-mode: forwards;
    animation-name: showcard;
    animation-duration: 0.5s;
    animation-play-state: paused;
    display: none;
    /* transition: all 0.4s; */
    width: 250px;
    /* height: 262px; */
    background-color: palegreen;
    position: absolute;
    top: 100%;
    left: 0%;
    /* display: grid; */
    /* width: calc(507px * 1);
    height: calc(262px * 1);
    padding: 20px;
    border-radius: 8px; */

    /* grid-template-columns: 70% 30%;
    grid-column-gap: 5px; */
}

/* .left .card .left {
    height: 100%;
    background-color: olivedrab;
}

.left .card .right {
    height: 100%;
    background-color: teal;
} */

.item {
    font-size: 14px;
    display: block;
    transition: all 0.3s;
}

.left li:hover .item {
    transform: translateY(-30%);
}</style>
<style scoped src="@/assets/css/head/leftlist.css"></style>