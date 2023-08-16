<template>
    <div class="movie" :style="dynamicWh({ normal: 1244, max: 2014, min: 1244 })">
        <div class="carousellist" :style="dynamicWh(undefined, { normal: 360, max: 494, min: 360 })">
            <a class="img" href="#">
                <img src="../../../assets/images/tvimg.webp" alt="">
            </a>
            <ul class="title" :style="dynamicWh({ normal: 168, max: 228, min: 168 })">
                <li>
                    <a href="#">
                        <h3>《{{ mock('@cword(2,5)') }}》</h3>
                        <p>{{ mock('@cword(50)') }}</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>《{{ mock('@cword(2,5)') }}》</h3>
                        <p>{{ mock('@cword(50)') }}</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>《{{ mock('@cword(2,5)') }}》</h3>
                        <p>{{ mock('@cword(50)') }}</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>《{{ mock('@cword(2,5)') }}》</h3>
                        <p>{{ mock('@cword(50)') }}</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>《{{ mock('@cword(2,5)') }}》</h3>
                        <p>{{ mock('@cword(50)') }}</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>《{{ mock('@cword(2,5)') }}》</h3>
                        <p>{{ mock('@cword(50)') }}</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="typelist" :style="dynamicWh(undefined, { normal: 86, max: 92, min: 86 })">
            <div class="item" >
                <div class="title">
                    <span style="font-size: 18px;color: #ffffff;">
                        热播
                    </span>
                    <a href="#">
                        <span>全部</span>
                        <i class="colourless gengduo"></i>
                    </a>
                </div>
            <ul class="items">
                <li><a href="#">播放数量</a></li>
                <li><a href="#">播放数量</a></li>
                <li><a href="#">播放数量</a></li>
                <li><a href="#">播放数量</a></li>
            </ul>
            </div>
            <div class="item" >
                <div class="title">
                    <span style="font-size: 18px;color: #ffffff;">
                        风格
                    </span>
                    <a href="#">
                        <span>全部</span>
                        <i class="colourless gengduo"></i>
                    </a>
                </div>
            <ul class="items">
                <li v-for="index in 10"><a href="#">{{ mock('@ctitle(3,6)') }}</a></li>
               
            </ul>
            </div>
            <div class="item" >
                <div class="title">
                    <span style="font-size: 18px;color: #ffffff;">
                        地区
                    </span>
                    <a href="#">
                        <span>全部</span>
                        <i class="colourless gengduo"></i>
                    </a>
                </div>
            <ul class="items">
                <li v-for="index in 10"><a href="#">{{ mock('@city()') }}</a></li>
              
            </ul>
            </div>
            <div class="item" >
                <div class="title">
                    <span style="font-size: 18px;color: #ffffff;">
                        热搜
                    </span>
                    <a href="#">
                        <span>全部</span>
                        <i class="colourless gengduo"></i>
                    </a>
                </div>
            <ul class="items">
                <li v-for="index in 4"><a href="#">{{ mock('@cword(2,6)') }}</a></li>
                
                <!-- <li><a href="#">播放数量</a></li> -->
            </ul>
            </div>
        </div>
        <div class="hotlist" :style="dynamicWh(undefined,{normal:300,max:428,min:300})">
            <div class="video" id="hotlistvideo">

            </div>
            <ul class="videolist">
                <li v-for="index in 8">
                    <a href="#">
                         <div class="img">
                            <img src="../../../assets//images/tvvideolistimage.webp" alt="">       
                         </div>
                         <div class="videotitle">
                            {{ mock('@cword(5)') }}
                         </div>
                         <div class="desc" style="font-size: 14px;color: #727272;">
                            {{ mock('@cword(10)') }}
                         </div>
                        </a>
                </li>
            </ul>
        </div>
    </div>
</template>
 
<script setup>

import {
reactive,onMounted
} from 'vue'

import {

} from 'vuex'
import Player from 'xgplayer'
import Mock from 'mockjs';
import dynamicsize from '@/utils/dynamicsize'
const dynamicWh = (w, h) => {
    return dynamicsize.dynamicWH(w, h).value
}
const player=reactive({})
const mock = (str) => {
    return Mock.mock(str)
}
onMounted(()=>{
   new Player({
    id: 'hotlistvideo',
    url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',
    height:'100%',
    width:'100%',
    // plugins:[FlvPlugin],
    // download:true,
  
    // mini: true,
   
 
})
})
</script>
<style scoped>
@import url('xgplayer/dist/index.min.css');
.movie {
    /* width: 100%; */
    height: 1000px;
    /* background-color: orange; */
}
.movie a{
    color: #ffffff;
}
.carousellist {

    width: 100%;
    /* height: 360px; */
    /* background-color: palevioletred; */
    position: relative;

}

.carousellist .img {
    display: block;
    width: 100%;
    height: 100%;
}

.carousellist ul.title {
    padding: 0 14px;
    height: calc(100% - 64px);
    top: 64px;
    right: 20px;
    position: absolute;
    /* background-color: aqua; */
    background: rgba(0, 0, 0, 0.3);
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: 100%;


}

.carousellist ul.title li {
    width: 100%;
    height: 100%;
}

.carousellist ul.title li a {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-around;
    width: 100%;
    height: 100%;
    color: #ffffff;
    ;
}

.carousellist ul.title li:hover a {
    color: #1483b0;
}

.carousellist ul.title li a h3,
.carousellist ul.title li a p {

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.carousellist ul.title li a h3 {
    font-size: 16px;
}

.carousellist ul.title li a p {
    font-size: 14px;
}

.typelist {
    width: 100%;
    /* background-color: palegreen; */
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;

}

.typelist .item {
    height: 100%;
    /* width: 25%; */
display: flex;
flex-direction: column;
justify-content: space-between;
}

.typelist .item .title a {
    font-size: 13px;
    color: #ffffff;
    text-align: center;
}

.typelist .item .title a i {
    font-size: 13px;
}
.typelist .item .items{
    font-size: 14px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-rows: repeat(2,1fr);
   
}
.typelist .item:nth-child(n+2) .items{
grid-template-columns: repeat(5,1fr);
}
.typelist .item:last-child .items{
grid-template-columns: repeat(2,1fr);

}
.hotlist{
width: 100%;
background-color: orange;
display: grid;
grid-template-columns: repeat(7,1fr);
grid-row-gap: 24px;
grid-column-gap: 10px;
grid-template-rows: repeat(2,1fr);
}
.hotlist .video{
    background-color: palevioletred;
    grid-row: span 2;
    grid-column: span 3;
}
.hotlist .videolist{
    background-color: teal;
    grid-row: span 2;
    grid-column: span 4;
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
    grid-row-gap: 20px;

}
.hotlist .videolist li a{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: chocolate;
    width: 100%;
    height: 100%;

}
.hotlist .videolist li a .img{
    width: 100%;
    height: 60%;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
}

</style>