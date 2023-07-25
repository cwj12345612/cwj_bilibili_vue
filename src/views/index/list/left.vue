<template>
 <div class="left" ref="index_list_left" id="index_list_left">
      <videodetail
      :videoconfig="videoconfig"
        v-for="video in videolist.slice(0,5)"
        :video="video"
        style="background-color: aqua;"
      >
      </videodetail>
 </div>
</template>
 
<script setup>
 import {
      ref,
      onMounted,
      reactive,

 } from 'vue'
import videodetail from '@/components/video/index.vue'
import Mock  from 'mockjs';
const videoconfig = reactive({
    width: 0 ,

    height:0
})
const slideshowvideos_right = ref()

const index_list_left = ref()
const videolist = reactive(Mock.mock({
    'list|33': [
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
    const changeWindows = () => {
   
    const w = index_list_left.value.clientWidth
  
    console.log(w);
    videoconfig.width = (w - 12*3) / 4
    
    videoconfig.height=200
   console.log(videoconfig)
}
onMounted(() => {
  
        changeWindows()
    
    window.addEventListener('resize', () => {
        changeWindows();
    })
})
</script>
<style scoped>
.left{
    flex-wrap: wrap;
      width: 80%;
      /* height: 50vh; */
      background-color: green;
      display: flex;
      justify-content: space-between;

}
</style>