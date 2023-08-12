<template>
    <div class="category" :style="dynamicWH(undefined,{normal:550,max:650,min:222*2+50})">
        <div class="list">
            <div class="title">
                <div class="logo" style="font-size: 30px;">
                    <i class="colour zhibo" style="font-size: 30px;"></i>
                    <span>直播</span>
                </div>
                <div class="more">
                    <button >
                        <i class="colourless shuayishua"></i>
                        <span>换一换</span>
                    </button>
                     <button >
                          <span>查看更多</span>
                        <i class="colourless gengduo"></i>
                      
                    </button>
                </div>
            </div>
            <ul class="items">
                <homepage_more_category_videocard v-for="index in  mock({'num|2-8':8}).num"></homepage_more_category_videocard>
            </ul>
        </div>
        <div class="ranking">
            <div class="title">
                <h1>排行榜</h1>
                <button>
                    <span>更多</span>
                    <i class="colourless gengduo"></i>
                </button>
            </div>
            <ul class="rankinglist">
                    <li v-for="index in 10">
                    <h3>{{ index }}</h3>
                    <span>{{ mock('@cword(50)') }}</span>
                    </li>
                  
            </ul>
        </div>
    </div>
</template>
 
<script setup>
import homepage_more_category_videocard from '@/components/card/videocard.vue'
import {
onMounted
} from 'vue'

import {

} from 'vuex'
import Mock from 'mockjs'
const mock=(str)=>{
    return Mock.mock(str)
}
import dynamicsize from '@/utils/dynamicsize'
const dynamicWH=(w,h)=>{
    return dynamicsize.dynamicWH(w,h).value
}

</script>
<style scoped>
.category {
    margin-bottom: 20px;
    grid-column: span 5;
    /* background-color: aqua; */
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 100%;
    /* grid-template-rows: 50px 1fr 1fr; */
    /* height: 550px; */
}

.category .list {
    /* background-color: orangered; */
    grid-column: span 4;

    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50px 1fr 1fr;
}
.category .list .title{
    /* background-color: aquamarine; */
    grid-column: span 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.category .list .more {
    display: flex;
}
.category .list .title .more button{
   
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border-radius: 6px;
    border: 1px  solid #e3e5e7;
    color: #2f3032;
}
.category .list .items{
    /* background-color: blueviolet; */
    grid-row: span 2;
    grid-column: span 4;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
    justify-content: center;
    align-items: center;
}

.category .ranking{
    /* background-color: goldenrod; */
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: 100%;
    gap: 20px;
    justify-content: center;
    align-items: center;
}
.category .ranking .title {
    /* background-color: burlywood; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.category .ranking .title h1{
    font-style: normal;
}
.category .ranking .title button{
    padding: 5px 10px;
    border-radius: 6px;
    border: 1px solid #e3e5e7;
}
.category .ranking .rankinglist{
    border-radius: 8px;
    border: 1px solid  #e3e5e7;
    height: 100%;
    /* background-color: crimson; */
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(10,1fr);
}
.category .ranking .rankinglist li{
    display: grid;
   grid-row-gap:20px;
    grid-template-columns: 30px 1fr;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
}
.category .ranking .rankinglist li h3{
    font-style: oblique;
}
.category .ranking .rankinglist li span{
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
.category .ranking .rankinglist li:nth-child(2n){
    background-color: #f6f7f8;
}
.category .ranking .rankinglist li:nth-child(2n-1){
    background-color: #ffffff;
}
.category .ranking .rankinglist li:nth-child(-n+3) h3{
    color: goldenrod;
}
</style>