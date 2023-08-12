<template>
    <div class="favorite">
        <div class="nav">
            <div class="item">
                <div class="top" style="cursor: pointer;" @click.prevent="n1 = !n1">
                    <h3>我创建的</h3>
                    <i class="colourless xialada"></i>
                </div>
                <ul v-show="n1" class="createlist">

                    <li class="create">
                        <div class="left">
                            <i class="colourless tianjia" style="background-color: #ccd1d9; color: #ffffff;"></i>
                            <span style="margin-left: 10px;">新建收藏夹</span>
                        </div>
                    </li>
                    <li class="item default">
                        <div class="left">
                            <i class="colourless shoucangjia"></i>
                            <span style="margin-left: 10px;">新建收藏夹</span>
                        </div>
                        <div class="right">
                            <span>66</span>
                        </div>
                    </li>
                    <li class="item" v-for="index in 40">
                        <div class="left">
                            <i class="colourless shoucangjia"></i>
                            <span style="margin-left: 10px;">新建收藏夹</span>
                        </div>
                        <div class="right">
                            <span>66</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="item">
                <div class="top" style="cursor: pointer;" @click.prevent="n2 = !n2">
                    <h3>我的收藏和订阅</h3>
                    <i class="colourless xialada"></i>
                </div>
                <ul v-show="n2" class="createlist">

                    <li class="create">
                        <div class="left">
                            <i class="colourless tianjia" style="background-color: #ccd1d9; color: #ffffff;"></i>
                            <span style="margin-left: 10px;">新建收藏夹</span>
                        </div>
                    </li>
                    <li class="item default">
                        <div class="left">
                            <i class="colourless shoucang"></i>
                            <span style="margin-left: 10px;">新建收藏夹</span>
                        </div>
                        <div class="right">
                            <span>66</span>
                        </div>
                    </li>
                    <li class="item" v-for="index in 40">
                        <div class="left">
                            <i class="colourless shoucang"></i>
                            <span style="margin-left: 10px;">新建收藏夹</span>
                        </div>
                        <div class="right">
                            <span>66</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
       <section1></section1>
    </div>
</template>
 
<script setup>
import section1 from './section.vue'
import {
    reactive, ref,onMounted
} from 'vue'

import {

} from 'vuex'
import {
useRoute,useRouter
}from 'vue-router'
const route=useRoute()
const n1 = ref(true)
const n2 = ref(true)
import Mock from 'mockjs'

const mock = (str) => {
    return Mock.mock(str)
}
import dynamicsize from '@/utils/dynamicsize';
const dynamicWH = (w, h) => {
  return dynamicsize.dynamicWH(w, h).value
}
onMounted(() => {
   console.log(route.params); 

})
</script>
<style scoped>
.favorite {
    margin-top: 20px;
    width: 100%;
    /* height: 1000px; */
    /* background-color: orange; */
}

.favorite .nav {
  
    width: 209px;
    height: 100%;
    float: left;
    /* background-color: palevioletred; */
    border-right: 1px solid #f4f5f7;
    padding: 0 5px;
    padding-left: 25px;
}
.favorite .nav .item{
    margin-bottom: 20px;
}
.favorite .nav .createlist {
    overflow: auto;
    width: 100%;
    height: 300px;
    /* background-color: cadetblue; */
    display: flex;
    flex-direction: column;
    align-items: center;
   
}

.favorite .nav .top {
   
    height: 54px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f4f5f7;
}

.favorite .nav .top h3 {
    font-size: 18px;
}

.favorite .nav .createlist li.create {
    height: 44px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

}

.favorite .nav .createlist li {
    height: 44px;
    width: 100%;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
}

.favorite .nav .createlist li.item {

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.favorite .nav .createlist li.item:hover {
    background-color: #00a1d6;
}

.favorite .nav .createlist li.item:hover .right span {
    display: none;
}

.favorite .nav .createlist li.item:hover .right::before {
    content: '\e67f';
    font-family: 'colourless';
    font-size: 20px;
}

</style>