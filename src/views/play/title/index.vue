<template>
<div class="title" :style="style">
<div class="detailtitle"
:style="dynamicWH(
    {normal:668,max:1694,min:668},

)"
>
<div class="videotitle" style="color: #18191c;font-size: 20px;">
    罗翔讲自身经历：吃饭时被服务员认出来了，想让我帮帮她
</div>
<div class="info">
    <span>
        <i class="colourless bofangshu"></i>
        111.4万
    </span>
    <span>
        <i class="colourless danmushu"></i>
        11135
    </span>
    <span>
       2023-10-10 12:12:12
    </span>
    <span>
        <i class="colourless guanbi" style="color: #fd6870;"></i>
        未经作者授权,禁止转载
    </span>
</div>
</div>
<div class="athor" 
:style="dynamicWH(
    {normal:350,max:411,min:350},
)"
>
    <a href="#">
        <img class="upimg" src="@/assets/images/头像.png" alt="">
    </a>
    <div class="name_other">
        <div class="name">
          <div>
            <a href="#" style="margin-right: 10px;color: #000000;">你好世界牛牛牛牛牛</a>
           <a href="#" >
            <i class="colourless sixin"></i>
            <span>发消息</span>
           </a>
          </div >
           <div style="color: #61666d;">
            联合国官方搜索222
           </div>
        </div>
        <div class="other">
            <a href="#" class="cd">
                <i class="colourless xiazaiwancheng"></i>
                 <span>充电</span>
            </a>
            <a class="gz" href="#">
                <i class="colourless tianjia"></i>
                <span>关注</span>
                <span>111.8万</span>
            </a>
        </div>
    </div>
</div>
</div>
</template>
 
<script setup>

import {

    } from 'vue'

import {

    } from 'vuex'
    import dynamicsize from '@/utils/dynamicsize'
const style=dynamicsize.dynamicWH(
    undefined,
    {normal:104,max:108,min:104},
)
const dynamicWH=(width,height)=>{
   return dynamicsize.dynamicWH(width,height).value
}
</script>
<style scoped>
.title {
   /* background-color: teal; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title .detailtitle {
   
    float: left;
    height: 100%;
   padding-top: 22px;
    /* background-color: blueviolet; */
}
.detailtitle .info{
    margin-top: 10px;  
}
.detailtitle .info span {
  color: #9da1a8;
    margin-right: 10px;
}
.title .athor {
    float: right;
    /* background-color: palegreen; */
    height: 100%;
   
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.athor .upimg {
    width: 48px;
    height: 48px;
    border-radius: 24px;
}
.athor .name_other  {
    height: 80%;
    width: 100%;
    flex-grow: 0;
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.name_other .name{
    height: 60%;
    width: 100%;
    /* background-color: orangered; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.name_other .other{
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.name_other .other .cd  {
   border-radius: 6px;
   border: 1px palevioletred solid;
    height: 80%;
    /* background-color: burlywood; */
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: palevioletred;
}
.name_other .other .cd:hover{
    background-color: rgb(172, 116, 135);
}
.name_other .other .gz {
    background-color: #00aeec;
    border-radius: 6px;
    width: 60%;
    height: 80%;
    /* background-color: cadetblue; */
    color: #f2f3f4;
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>
