<!-- 个人空间 -->
<template>
<div class="space" :style="dynamicWH({ normal: 1283, max: 1283, min: 1101 },)">
    <div class="h" >
        <div class="angle">
            <span>视角:</span>
            <span>我自己</span>
            <i class="colourless xialaxiao"></i>

        </div>
        <div class="user">
            <img  class="userimg" src="../../assets/images/头像.png" alt="">
            <div class="userdetail">
                <div class="name">
                    <span style="color: #ffffff;">张三aaaa</span>
                    <i class="colourless nan" style="background-color: #5fd4f2;font-size: 25px;"></i>
                    <i class="colour ic_userlevel_5" ></i>
                    <i class="colourless wodedahuiyuan"></i>
                </div>
                <input type="text" value="个性签名" placeholder="个性签名" class="qianming">
            </div>
        </div>
    </div>
    <div class="nav" :class="ca">
        <ul class="leftlist">
            <li><router-link to="/space/home" active-class="active" >
                <i class="colourless shouyeweixuanzhong"></i>
                <span>主页</span>
            </router-link></li>
            <li><router-link to="/" active-class="active">
                <i class="colourless dongtaiweixuanzhong"></i>
                <span>动态</span>
            </router-link></li>
            <li><router-link  to="/">
                <i class="colourless chuangzuozhongxin"></i>
                <span>投稿</span>
           </router-link></li>
            <li ><router-link to="/" active-class="active">
                <i class="colourless bofangshu"></i>
                <span>合集与列表</span>
           </router-link></li>
            <li ><router-link to="/space/favorite"  active-class="active">
                <i class="colourless shoucang"></i>
                <span>收藏</span>
           </router-link></li>
            <li><router-link to="/" active-class="active">
                <i class="colourless zhuifanshu"></i>
                <span>订阅</span>
           </router-link></li>
            <li><router-link to="/" active-class="active">
                <i class="colourless shezhi"></i>
                <span>设置</span>
           </router-link></li>
        </ul>
        <div class="search">
            <input type="search" placeholder="搜索视频、动态">
            <i class="colourless sousuo"></i>
        </div>
        <ul class="rightlist">
            <li>
                <span>关注数</span>
                <span>222</span>
            </li>
            <li>
                <span>粉丝数</span>
                <span>222</span>
            </li>
            <li>
                <span>获赞数</span>
                <span>222</span>
            </li>
            <li>
                <span>播放数</span>
                <span>222</span>
            </li>
            <li>
                <span>阅读数</span>
                <span>222</span>
            </li>

        </ul>
    </div>
<!-- <space_home></space_home> -->
<router-view></router-view>
</div>

</template>

<script setup>
import space_home from './home'
import {
ref,reactive,computed,onMounted
    } from 'vue'

import {
useStore
    } from 'vuex'
    const store=useStore()
    import dynamicsize from '@/utils/dynamicsize';
const dynamicWH = (w, h) => {
  return dynamicsize.dynamicWH(w, h).value
}
const ca=computed(()=>{

// console.log(store.state.pageconfig.nowpage.scroll)
    return {
        'scroll':store.state.pageconfig.nowpage.scroll>(192+64) 
    }
})
onMounted(()=>{

})
</script>
<style scoped>
.space{
    /* width: 100%; */
    /* height: 1000px; */
    /* background-color: orange; */
    position: relative;
    /* transform:translate(0,0); */
}
.space .h{
    width: 100%;
    height: 192px;
    background: url(../../assets/images/spacebackimage.webp) no-repeat center center ;
    position: relative;
}
.space .h .angle{
background: rgba(0,0,0,.45);   
 font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 30px;
    /* width: 91px; */
    padding: 0 16px;
    color: #ffffff;
    /* background-color: aqua; */
    position: absolute;
    top: 10px;
    right: 50px;
}
.space .h .user{
    height: 76px;
    width: 100%;
    /* background-color: blueviolet; */
    position: absolute;
    bottom: 0;
    padding-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
padding-bottom: 16px;
}
.space .h .user img.userimg{
    height: 60px;
    width: 60px;
    border-radius: 30px;
    /* background-color: cadetblue; */
}

.space .h .user .userdetail {
    height: 60px;
    width: 100%;
    /* background-color: burlywood; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.space .h .user .userdetail .name{
    width: 20%;
    height: 45%;
    /* background-color: chocolate; */
    display: flex;
    justify-content: space-around;
    align-items: center;
   
}
.space .h .user .userdetail .name i {
    font-size: 30px;
    color: #ffffff;
}
.space .h .user .userdetail .qianming {
    height: 40%;
    width: 20%;
    font-size: 20px;
    border: none;
    display: block;
    color: #ffffff;
    background: none;
    padding-left: 10px;
}
.space .nav{
    width: 100%;
    padding: 0 20px;
    height: 66px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.space .nav .leftlist{
    height: 100%;
    width: 48%;
    /* background-color: brown; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.space .nav .leftlist li:has(>a.active){
    /* color: #23c9ed; */
    border-bottom: #23c9ed 1px solid;
}
.space .nav .leftlist li a.active {
      color: #23c9ed;
}
.space .nav .leftlist li a  {
  
    color: #3f3e3f;
    font-size: 20px;
}
.space .nav .leftlist li{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.space .nav .leftlist li:hover a{
    color: #23c9ed;
}
.space .nav .rightlist{
    height: 100%;
    width: 20%;
    /* background-color: orangered; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.space .nav .rightlist li {
    font-size: 12px;
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.space .nav .search {
    width: 12.5%;
    height: 30px;
    border-radius: 15px;
    /* background-color: cadetblue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    color: #cbd0d7;
    border: 1px solid #cbd0d7;
}
.space .nav .search i {
    cursor: pointer;
    font-size: 20px;
}
.space .nav .search input {
    width: 100%;
    height: 80%;
    font-size: 12px;
    border: none;
    background: none;
    padding-left: 8px;
}
.space .nav.scroll {
    z-index: 10086;
    position: fixed;
    top: 0;
width: inherit;
}
</style>