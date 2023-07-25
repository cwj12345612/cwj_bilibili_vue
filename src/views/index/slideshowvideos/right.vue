<template>
    <div class="right" 
    >
    <videodetail 
        :videoconfig="videoconfig"
        v-for="video in videolist.slice(0)"
        :video="video"
        ></videodetail>
     
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
import videodetail from '@/components/video/index.vue'
import Mock from 'mockjs';
import { useStore } from 'vuex';
const store=useStore();
const widthcoefficient=0.172
const heightcoefficient=0.9
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
    width: 0 ,
    height: 0
})


watch(()=>store.state.pageconfig.global.clientWidth,(val)=>{
    // console.log(val)
videoconfig.width=val*widthcoefficient
videoconfig.height=videoconfig.width* heightcoefficient
},{immediate:true})

</script>
<style scoped>
.right {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-between;
   /* height: 100%; */
    /* width: 100%; */
    background-color: brown;
}
</style>