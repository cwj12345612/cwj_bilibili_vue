<template>
    <div class="right" :style="style" :class="Object.values(ca)">
        <li class="headavatar">
            <a :href="headavatar.href">
                <img :src="headavatar.avatarsrc" :alt="headavatar.id">
            </a>
        </li>
        <li class="item" v-for="li in list" @mousemove.stop="show" @mouseout="none">
            <a :href="li.href" class="item">
                <i :class="li.icon" v-if="li.icon"></i>
                <span v-if="style.width.replace('px','') > 400">{{ li.title }}</span>
            </a>
            <div class="card"
          
            >
            <div class="left1">

</div>
<div class="right1">

</div>
            </div>
        </li>


        <li class="constcontribute" :style="dynamicWH({ normal: 90, max: 90, min: 34 })">
            <a :href="constcontribute.url">
                <i v-if="constcontribute.icon" :class="constcontribute.icon"></i>
                <span v-if="style.width.replace('px','') > 400">
                    {{ constcontribute.span}}
                </span>
            </a>
        </li>
    </div>
</template>
 
<script setup>

import {
    reactive,
    ref,
    computed,
    onMounted
} from 'vue'

import {

} from 'vuex'
defineProps({
    ca:Object
})
import Mock from 'mockjs'
import dynamicsize from '@/utils/dynamicsize';

//#region  动态样式
const style = dynamicsize.dynamicWH(
    { normal: 466, max: 482, min: 326 }
)
const dynamicWH = (width, height) => {
    return dynamicsize.dynamicWH(
      width,height
    ).value
}
const show=(e)=>{
const card=e.currentTarget.querySelector('.card');
card.style.display='grid'
}
const none=(e)=>{
    const card=e.currentTarget.querySelector('.card');
card.style.display='none'
}
//#endregion 
//#region 模拟数据
const headavatar = reactive({
    id: Mock.mock('@id()'),
    avatarsrc: require('@/assets/images/头像.png'),
    href: Mock.mock('@url()')
})
const constcontribute = reactive({
    url: Mock.mock('@url()'),
    span: '投稿',
    icon: 'colourless tianjia'
})
const list = reactive([
    { id: 1, title: '大会员', href: '#', icon: "colourless wodedahuiyuan" },
    { id: 2, title: '消息', href: '#', icon: "colourless sixin" },
    { id: 3, title: '动态', href: '#', icon: "colourless zhuti" },
    { id: 4, title: '收藏', href: '#', icon: "colourless wodeshoucang" },
    { id: 5, title: '历史', href: '#', icon: "colourless lishijilu1" },
    { id: 6, title: '创作中心', href: '#', icon: "colourless chuangzuozhongxin" },
])
//#endregion 模拟数据

</script>
<style scoped>
.right {
    flex-grow: 0;
  flex-shrink: 0;
    max-width: 482px;
    min-width: 322px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: teal; */
}

a {
    color: blue;
}

.headavatar {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.headavatar a {
    width: 38px;
    height: 38px;
}

.headavatar a img {
    border-radius: calc(38px / 2);
}
.item {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.right .item .card{
    display: none;
    width: 507px;
    height: 262px;
    background-color: #fb7299;
    position: absolute;
    top: 100%;
    padding: 20px;
    right: 0;
    /* display: grid; */
    top: 100%;
    grid-template-columns: 70% 30%;
grid-column-gap: 5px;
  padding: 20px;
border-radius: 8px;
}
.right .card .left1{
    height: 100%;
background-color: olivedrab;
}
.right .card .right1{
    height: 100%;
    background-color: teal;
}
.item i{
    font-size: 20px;
    transition: all 0.3s;
}
.item:hover i {
    transform: translateY(-30%);
}
.constcontribute {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    min-width: 34px;
    max-width: 90px;
    border-radius: 8px;
  
    background-color: #fb7299;
}
.constcontribute a {
    color: #ffffff;
}
</style>

<style scoped src="@/assets/css/head/rightlist.css"></style>