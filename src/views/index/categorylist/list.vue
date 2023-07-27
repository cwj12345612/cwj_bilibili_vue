<template>
<div class="list">
    <div class="title" :style="`height: ${h*0.2}px;`" >
       
            <i class="iconfont-color icon-zhibo" style="font-size: 50px;"></i><span>直播</span>
    </div>
    <ul :style="`height: ${h}px;`">
      
        <videocard
        v-for="video in videolist.slice(0,5)"
        :video="video"
        ></videocard>
    </ul>
</div>
</template>
 
<script setup>
import  Mock  from 'mockjs';
import {
computed,reactive
    } from 'vue'
import videocard from '@/components/video/videocard.vue';
import {
useStore
    } from 'vuex'
    const store =useStore()
    defineProps({
    // videoconfig: Object,
    video: Object
})
const videolist = reactive(Mock.mock({
    'list|33': [
        {
            id: Mock.mock('@id'), title: Mock.mock('@cword(5,10)'), url: Mock.mock('@url'), img: require('@/assets/images/视频图片.png'),url:'#',
           detail:{
            amount: Mock.mock({ 'amount|100-5000': 5000 }).amount,
            barragequantity: Mock.mock({ 'barragequantity|400-2000': 2000 }).barragequantity,
            duration: '18:04',
           
           },
           author:Mock.mock('@cname(3,4)'),
           datetime: Mock.mock('@now(yy-MM-dd)')
        }
    ]}).list)
    const w= computed(()=>{
    // console.log(( store.state.pageconfig.windows.clientWidth * 0.18 )+'px')
 return  ( store.state.pageconfig.windows.clientWidth * 0.6 * 0.29 )+'px'
})
    const h=computed(()=>{
    // console.log(typeof w.value)
    let temp=store.state.pageconfig.windows.clientWidth * 0.6 * 0.29  *0.9
    // console.log(temp);
    temp = (temp<(460*0.47) ? (460 * 0.47) : (temp>(780*0.47) ?(780*0.47) :temp))
    // console.log(temp);
    // console.log(hh)
    return (temp)
})
</script>
<style scoped>
.title {
    font-size: 25px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: cadetblue;
}
ul {
    width: 100%;
display: flex;
justify-content: space-between;
background-color: orchid;
}
</style>