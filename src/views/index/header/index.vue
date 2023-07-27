<template>
      <div class="header">
            <div class="logo">
                  <i class="iconfont icon-bilibili" style="font-size: 50px;"></i>
            </div>
      </div>
</template>
 
<script setup>


</script>
<style scoped>
.header {
      width: 100%;
      height: 20vw;
      min-height: 155px;
      max-height: 240px;
      z-index: -1;
      display: flex;
      padding: 0 40px;
      align-items: flex-end;
      /* 加载背景图 */
      background-image: url('@/assets/images/header.png');
      /* 背景图垂直、水平均居中 */
      background-position: top center;
      /* 背景图不平铺 */
      background-repeat: no-repeat;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%
}

.header .logo {
      width: 15%;
      height: 50%;
      margin-bottom: 2vh;
      /* background-color: orchid; */
      display: flex;
      justify-content: center;
      align-items: center;
}
</style>