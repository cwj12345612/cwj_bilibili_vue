<template>
    <div class="king">
      <ul class="carousel" id="homepage_carousel"
      
      >
        <li v-for="li in list"  
       
        >
            <a :href="li.href" >
            <img :src="li.src" alt="">
        </a>
        </li>
      </ul>
      <div class="bottom">
        <div class="top">
            <h3>
                {{ mock('@cword(3,15)') }}
            </h3>
            <div class="button" >
                <button style="margin-right: 10px;" @click="click(-1)" >
                    <i class="colourless fanhui"></i>
                </button>
                <button class @click="click(1)"> 
                    <i class="colourless gengduo"></i>
                </button>
            </div>
        </div>
        <ul class="dian">
            <li  v-for="idx  in list.length" :class="idx-1 === index ? 'pitch' :undefined"></li>
            
        </ul>
      </div>
    </div>
</template>
 
<script setup>

import {
    ref,
    reactive,
    onMounted,
    computed,
    onBeforeUnmount
} from 'vue'

import {

} from 'vuex'
import Mock from 'mockjs'
const mock=(str)=>{
    return Mock.mock(str);
}
const list=reactive([
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/1.webp')},
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/2.webp')},
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/3.webp')},
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/4.webp')},
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/5.webp')},
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/6.webp')},
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/7.webp')},
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/8.webp')},
    {id:Mock.mock('@id()'),title:Mock.mock('@cword(3,10)'),href:'#',src:require('@/assets/images/9.webp')},

])
//当前图片下标
const index=ref(0);
const  num=ref(0);
const click=(val)=>{
   

}
let time=null
const anime=()=>{
    
     if(time){
         clearInterval(time)
     }
     time=setInterval(()=>{
        // console.log('d')
        const ul= document.getElementById('homepage_carousel')
        num.value-=ul.querySelector('li').offsetWidth
        // console.log(ul.style.width,ul.getElementsByTagName('li')[index.value].offsetWidth)
        if(Math.abs(num.value)>=list.length * ul.querySelector('li').offsetWidth){
            // console.log("最后一个")
            num.value=0;
            ul.style.left=0;
            index.value=0
           
            return
        }
        // console.log(num.value)
        // console.log(Math.abs(num.value),)
        ul.style.left=num.value+'px'
        index.value+=1
    },3000)
}
onMounted(anime)
onBeforeUnmount(()=>{
    if(time){
         clearInterval(time)
     }
})
</script>
<style scoped>
.king {
    /* background-color: orange; */
    background: rgba(0, 0, 0, 0.2);
    height: calc(calc((100% - 20px) / 2)*1.6 + 20px);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
}
.king ul.carousel {
   width: 100%;
    position: absolute;
    left: 0px;
    /* background-color: aqua; */
   height: 80%;
 /* width: 500%; */
   /* display: block; */
   display: flex;
   justify-content: flex-start;
   /* align-items: center;
   justify-content: flex-start; */
   /* width: 500%; */
   /* justify-content: center; */
}
.king ul.carousel li{
   flex-shrink: 0;
   flex-grow: 0;
    /* float: left; */
    /* height: 100%; */
   /* width: 100%;
   height: 100%; */
    /* float: left; */
   
}

.bottom{
    background: rgba(0, 0, 0, 0.1);
    /* background-color: orange; */
    height: 20%;
    width: 100%;
    padding: 5px 10px;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;

}
.bottom .top {
    /* background-color: aqua; */
    width: 100%;
    /* height: 40%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
color: #ffffff;
position: relative;
}
.bottom .button{
/* background-color: olivedrab; */
display: flex;
/* width: 8%; */

justify-content: space-between;
}
.bottom .button button {
    border: none;
    background: rgba(0, 0, 0, 0.4);
    color: #ffffff;
  padding: 5px;
    border-radius: 6px;
}
.bottom .dian {
    flex-grow: 0;
    position: relative;
    display: flex;
    /* width: 100px; */
    /* height: 30%; */
    height: fit-content;
    /* background-color: cadetblue; */
}
.bottom .dian li {
    flex-grow: 0;
    margin: 4px;
    width: 12px;
    height: 12px;
   background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
}
.bottom .dian li.pitch{
    background-color: #ffffff;
}
</style>