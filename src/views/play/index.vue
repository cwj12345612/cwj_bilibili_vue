<template>
 <div class="play">
      <div class="left">
            <div class="top">
                  <h1 class="title">
                        蜡笔小新10086
                  </h1>
                  <div class="detail">
                        <span><i class="iconfont icon-bofangshu"></i>117万</span>
                        <span><i class="iconfont icon-danmushu"></i>666</span>
                        <span>2022-10-10</span>
                        <span><i class="iconfont icon-guanbi" style="color: red;"></i>未经作者授权，禁止转载</span>
                  </div>
                  
            </div>
            <div class="video">
                  <video controlsList='nofullscreen nodownload noremote nofootbar'  controls>
                        <source 
                        src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4" 
                        type="video/mp4">
                  </video>
                  <div class="send">
                        <div class="info">
                              <span>88人在观看</span><span>,</span>
                              <span>19998条弹幕</span>
                        </div>
                        <div class="danmuset">
                             
                                    <i :class="`iconfont icon-bofangqi-${opendanmu ? 'danmukai' :'danmugundongguan'}`" @click="opendanmu=!opendanmu"></i>
                                    <i class="iconfont icon-shezhi1"></i>
                        </div>
                        <div class="input">
                              <div class="left">
                                    A
                              </div>
                              <input type="text" placeholder="发个弹幕见证一下">
                              <div class="right">
                                    发送
                              </div>
                        </div>
                  </div>
            </div>
            <div class="operation">
                  <div class="operation_left">
                        <div class="icon">
                              <i class="iconfont icon-zan"></i>
                              <span>8.7万</span>
                        </div>
                  </div>
            </div>
      </div>
 </div>
</template>
 
<script>
 
import { mapGetters,mapActions,mapMutations,mapState } from 'vuex';
 
export default {
    components:{
 
              },
    data() {
          return {
            opendanmu:true
                 }
         },
    computed:{

             },
    created() {
      this.$store.commit('systemConfig/setheaderclass', {
                  position: 'none',
                  leftcolour: 'black',
                  rightcolour: 'black',
                  backgroundcolor: '#ffffff',
                  searchexsits: false
            })
              },
    mounted() {

              },
    watch:{

          },

    beforeCreate(){

                  },
    beforeDestroy() {

                    },
    deactivated() {

                   },
}
</script>
<style scoped>
.play {
      width: 100%;
      height: 800px;
      padding: 0 var( --index-padding-leftrigth);
      background-color: orange;
     
}
.left {
      width: 70%;
      height: 100%;
      float: left;
      background-color: pink;
}
.left .top {
      background-color: aqua;
      width: 100%;
      height: 104px;
      padding-top: 22px;

}
.left .top .title {
      width: 100%;
      font-style: normal;
      height: 28px;
      font-size: 20px;
    
}
.top .detail  {
      margin-top: 10px;

}
.top .detail span {
      color: #9499a0;
      margin-right: 10px;
}
.video {
     width: 100%;
     height: 570px;
     background-color: tomato; 
}
video {

      width: 100%;
      /* height: 500px; */
      display: block;
}
/* //所有控件 */
    /* video::-webkit-media-controls-enclosure{ 
        display: none;
    } */
.send {
      width: 100%;
      height: 50px;
     
      background-color: #ffffff;
      padding: 0 12px;

}
.info{
      float: left;
      color: #61666d;
      height: 100%;
      line-height: 50px;
}
.danmuset {
      float: left;
      height: 100%;
      line-height: 50px;
      margin-left: 50px;
}
.danmuset i {
      margin-right: 20px;
      cursor: pointer;
      font-size: 30px;
}
.input {
      background-color: #f4f4f4;
      margin-top: calc((50px - 32px) / 2);
      float: right;
      width: 60%;
      height: 32px;
      /* background-color: aqua; */
      border-radius: 8px;
      overflow: hidden;
}
.input .left {
      background-color: #f4f4f4;
      float: left;
      height: 32px;
      line-height: 32px;
      margin-left: 10px;
      cursor: pointer;
      width: 20px;
      font-size: 25px;
}
.input input {
      background-color: #f4f4f4;
      float: left;
      height: 100%;
      padding-left: 5px;
      width: 80%;
      border: none;
}
.input .right {
      cursor: pointer;
float: right;
width: 70px ;
height: 100%;
line-height: 32px;
text-align: center;
color: #ffffff;
      background-color: #00aeec;
      padding: 3px;
}
.operation {
      width: 100%;
      height: 50px;
      background-color: teal;
}
.operation_left {

}
</style>