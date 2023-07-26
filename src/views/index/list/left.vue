<template>
 <div class="left" >
    <videocard 
        :videoconfig="videoconfig"
        v-for="video in videolist.slice(0)"
        :video="video"
      style="margin-bottom: 3vh;"
        ></videocard>
 </div>
</template>
 
<script setup>
 import {
      ref,
      onMounted,
      reactive,

 } from 'vue'
import videocard from '@/components/video/videocard.vue'
import Mock  from 'mockjs';
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
defineProps({
    videoconfig:Object
})

</script>
<style scoped>
.left{
    flex-wrap: wrap;
      width: calc(40% + (60% * 0.32 * 2 + (60% * 0.02)) );
    height: 100%;
      /* background-color: orangered; */
      display: flex;
      justify-content: space-between;

}
</style>