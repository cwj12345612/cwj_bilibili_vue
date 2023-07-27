<template>
   
    <div class="video" :style="`width: ${videoconfig.width};
     height: ${videoconfig.height};
 `
        ">
        <div class="img">
            <img :src="video.img" alt="#">
            <div class="detail">
                <span>
                    <i class="iconfont icon-bofangshu"></i>
                    <span>{{ video.detail.amount }}</span>
                </span>
                <span style="margin-right: 35%;">
                    <i class="iconfont icon-danmushu"></i>
                    <span>{{ video.detail.barragequantity }}</span>
                </span>
                <span>
                    {{ video.detail.duration }}
                </span>
            </div>
        </div>
        <a class="title" :href="video.url">
            {{video.title }}
        </a>
        <a class="author" href="#">
            <i class="iconfont icon-UPzhu"></i>
            <span>{{ video.author }}</span>
            <span>·</span>
            <span>{{ video.datetime }}</span>
        </a>
    </div>
</template>
 
<script setup>
import {
    ref
} from 'vue'
defineProps({
    videoconfig: Object,
    video: Object
})

</script>
<style scoped>
.video {
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    /* min-width: 240px;
    max-width: 380px; */
    /* background-color: #ffffff; */
    /* padding: 0 8px; */

}

.video .img {
    width: 100%;
    height: 60%;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
}

.video .img .detail {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20%;
    /* background-color: orangered; */
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
}

.title {
    width: 100%;
    height: 20%;
    max-height: 45px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.title:hover {
    color: rgb(15, 82, 176);
}

.author {
    height: 10%;
    width: 100%;
    /* background-color: orange; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.author:hover {
    color: rgb(15, 82, 176);
}

.author span {
    margin-right: 3%;
}
</style>