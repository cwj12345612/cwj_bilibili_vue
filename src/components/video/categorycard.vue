<template>
  <div class="categorycard" :style="`width: ${w};
         height: ${h};`
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
      {{ video.title }}
    </a>
    <div class="msg">更新世界所说的分布广泛·</div>
  </div>
</template>
 
<script setup>
import {
    ref,computed
} from 'vue'
import {
useStore
} from 'vuex'
const store=useStore()
defineProps({
  // videoconfig: Object,
  video: Object
})
const w= computed(()=>{
    // console.log(( store.state.pageconfig.windows.clientWidth * 0.18 )+'px')
 return  ( store.state.pageconfig.windows.clientWidth * 0.6 * 0.29 )+'px'
})
const h=computed(()=>{
    // console.log(typeof w.value)
    let temp=parseFloat(w.value)  *0.9
    // console.log(temp);
    temp = (temp<(460*0.47) ? (460 * 0.47) : (temp>(780*0.47) ?(780*0.47) :temp))
    // console.log(temp);
    // console.log(hh)

    return (temp)+'px'
})
</script>
<style scoped>
.categorycard {
  width: 100%;
  height: 100%;
  border: 0.1px solid grey;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: #ffffff;
}

.categorycard .img {
  width: 100%;
  height: 60%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.categorycard .img .detail {
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

.msg {
  height: 10%;
  width: 100%;
  /* background-color: orange; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: gray;
}
</style>