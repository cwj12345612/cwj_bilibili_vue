<template>
<ul class="left">
    <li v-for="li in list">

<a class="item" :class="[leftclass.pagename,leftclass.scroll]" :href="li.href">
    <i v-if="li.icon" :class="li.icon"></i>
    <span>{{ li.title }}</span>
  </a>
</li>
</ul>

</template>
 
<script setup>

import {
reactive,
ref,
computed,
onMounted
    } from 'vue'

import {
useStore
    } from 'vuex'
   const list=reactive([
                { id: 1, icon: 'colourless colourlessbilibili', title: '首页', href: '#' },
                { id: 2, title: '番剧', href: '#' },
                { id: 3, title: '直播', href: '#' },
                { id: 4, title: '游戏中心', href: '#' },
                { id: 5, title: '会员购', href: '#' },
                { id: 6, title: '漫画', href: '#' },
                { id: 7, title: '赛事', href: '#' },
                { id: 8, title: '纪录片', href: '#' },
                { id: 9, title: 'LPL', href: '#' },
                { id: 10, icon: 'colourless colourlessxiazai', title: '下载客户端', href: '#' },
            ])
    const leftclass=reactive({
        // pagename:'',
    })
    leftclass.pagename=computed(()=>{
        return useStore().state.pageconfig.nowpage.name
    })
onMounted(()=>{
    window.addEventListener('scroll',()=>{
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         leftclass.scroll = (scrollTop==0 ? undefined: 'scroll')
    })
})
</script>
<style scoped>
ul {
    height: 80%;
    width: 40%;
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
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
<style scoped src="@/assets/css/header/left.css"></style>