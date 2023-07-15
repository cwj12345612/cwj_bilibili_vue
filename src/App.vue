<template>
  <bilibili_head style="position: absolute;"></bilibili_head>
  <router-view/> 
</template>
<script>
import bilibili_head from '@/components/header/index.vue'
export default {
  components:{
  bilibili_head
}
}
</script>
<style>
.type_area {
  width: 100%;
  padding: 0 60px;
}
</style>
