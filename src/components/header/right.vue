<template>
    <ul class="right" :style="style">
        <li class="headavatar">
            <a :href="headavatar.href">
                <img :src="headavatar.avatarsrc" :alt="headavatar.id">
            </a>
        </li>

        <li class="item" 
       
        v-for="li in list">
            <a :href="li.href"
            :class="[rightclass.scroll,rightclass.pagename]"
            class="item">
                <i :class="li.icon" v-if="li.icon"></i>
                <span>{{ li.title }}</span>
            </a>
        </li>

        <li class="contribute">
            <a :href="contribute.url">
                <span>
                    <i v-if="contribute.icon" :class="contribute.icon"></i>
                    <span>{{ contribute.span }}</span>
                </span>
            </a>
        </li>
    </ul>
</template>
 
<script setup>
import Mock from 'mockjs'
import {
reactive,
ref,
computed,
onMounted
    } from 'vue'

import {
useStore
    } from 'vuex'
    import dynamic from '@/utils/dynamic';
const store=useStore()
const headavatar = reactive({
    id: Mock.mock('@id()'),
    avatarsrc: require('@/assets/images/头像.png'),
    href: Mock.mock('@url()')
})
const contribute = reactive({
    url: Mock.mock('@url()'),
    span: '投稿',
    icon: 'iconfont icon-tianjia'
})
const list = reactive([
    { id: 1, title: '大会员', href: '#', icon: "colourless colourlesswodedahuiyuan" },
    { id: 2, title: '消息', href: '#', icon: "colourless colourlesssixin" },
    { id: 3, title: '动态', href: '#', icon: "colourless colourlesszhuti" },
    { id: 4, title: '收藏', href: '#', icon: "colourless colourlesswodeshoucang" },
    { id: 5, title: '历史', href: '#', icon: "colourless colourlesslishijilu1" },
    { id: 6, title: '创作中心', href: '#', icon: "colourless colourlesschuangzuozhongxin" },
])

const rightclass=reactive({
        // pagename:'',
    })
    rightclass.pagename=computed(()=>{
        return store.state.pageconfig.nowpage.name
    })
    rightclass.scroll=computed(()=>{
        return store.state.pageconfig.nowpage.isscroll ? 'scroll' :undefined
    })
    const style=computed(()=>{
        const w=store.state.pageconfig.windows.clientWidth * (466 / 1425);
        return dynamic.dynamicsize(
            {normal:466,max:482,min:326}
        )
    })
</script>
<style scoped>
.right {
    max-width: 482px;
    min-width: 326px;
    height: 80%;
    /* width: 35%; */
    /* background-color: cadetblue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.headavatar {
    height: 100%;
    width: 12%;
    display: flex;
    /* background-color: blueviolet; */
    justify-content: center;
    align-items: center;
}

.headavatar a {
    display: flex;
    justify-content: center;
    align-items: center;
}

.headavatar img {
    width: 42px;
    height: 42px;
    border-radius: 21px;
}
.right .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
}
.right .item i {
    transition: all 0.3s;

}
.right .item:hover i {
    transform:translateY(-30%);
}
.right .contribute {
    border-radius: 8px;
    height: 70%;
    width: 20%;
    background-color: #fb7299;
    display: flex;
    justify-content: center;
    align-items: center;

}

.right .contribute a {
    color: #ffffff;
}
</style>

<style scoped src="@/assets/css/header/right.css"></style>