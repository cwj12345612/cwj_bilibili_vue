<template>
<ul class="left" :style="style">
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
    import  num from '@/utils/number'
const store=useStore()
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
        return store.state.pageconfig.nowpage.name
    })
    leftclass.scroll=computed(()=>{
        // console.log(Date.now())
        return store.state.pageconfig.nowpage.isscroll ? 'scroll' :undefined
    })
const style=reactive({})

style.width=computed(()=>{
    const h=store.state.pageconfig.windows.clientWidth * (527 / 1425)
    return num.scopenumber(h,423,611)+'px';
})

</script>
<style scoped>
ul {
    height: 80%;
    max-width: 611px;
    min-width: 423px;
    /* background-color: blueviolet; */
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