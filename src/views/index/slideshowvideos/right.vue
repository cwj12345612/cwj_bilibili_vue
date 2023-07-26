<template>
    <div class="right" 
    >
    <videocard 
        :videoconfig="videoconfig"
        v-for="video in videolist.slice(0)"
        :video="video"
        ></videocard>
     
    </div>
</template>
 
<script setup>
import {
    ref,
    onMounted,
    reactive,
    watch,
    computed
} from 'vue'
import videocard from '@/components/video/videocard.vue'
import Mock from 'mockjs';


const videolist = reactive(Mock.mock({
    'list|6': [
        {
            id: Mock.mock('@id'), title: Mock.mock('@cword(50,60)'), url: Mock.mock('@url'), img: require('@/assets/images/视频图片.png'),url:'#',
           detail:{
            amount: Mock.mock({ 'amount|100-5000': 5000 }).amount,
            barragequantity: Mock.mock({ 'barragequantity|400-2000': 2000 }).barragequantity,
            duration: '18:04',
           
           },
           author:Mock.mock('@cname(3,4)'),
           datetime: Mock.mock('@now(yy-MM-dd)')
        }
    ]}).list)


const videoconfig = reactive({
    width: '32%',
    height: '47%'
})




</script>
<style scoped>
.right {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-between;
   height: 100%;
    width: 60%;
    /* background-color: brown; */
}
</style>