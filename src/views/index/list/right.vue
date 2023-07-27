<template>
 <div class="right">
<categorycard

        v-for="video in videolist.slice(0)"
        :video="video"
      style="margin-bottom: 5vw; "
></categorycard>
 </div>
</template>
 
<script setup>
import {
reactive,
} from 'vue'
import Mock  from 'mockjs';
 import categorycard from '@/components/video/categorycard.vue'
 const videolist = reactive(Mock.mock({
    'list|33': [
        {
            id: Mock.mock('@id'), title: Mock.mock('@cword(20,21)'), url: Mock.mock('@url'), img: require('@/assets/images/视频图片.png'),url:'#',
           detail:{
            amount: Mock.mock({ 'amount|100-5000': 5000 }).amount,
            barragequantity: Mock.mock({ 'barragequantity|400-2000': 2000 }).barragequantity,
            duration: '18:04',
           
           },
           author:Mock.mock('@cname(3,4)'),
           datetime: Mock.mock('@now(yy-MM-dd)')
        }
    ]}).list.slice(0,9))


</script>
<style scoped>
.right {
    width: calc(60% * 0.32);
    /* height: 100%; */
    /* background-color: thistle; */
}
</style>