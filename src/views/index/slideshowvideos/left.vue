<template>
 <div class="left">
    <a href="#" class="bigpic">
        <img src="@/assets/images/轮播图.png" alt="">
    </a>
    <div class="bottom">
       <div class="top">
        <span class="title">正在直播LPL季后赛：TES vs EDG！</span>
        <div class="button">
            <button >
                <i class="iconfont icon-fanhui"></i>
            </button>
            <button >
                <i class="iconfont icon-gengduo"></i>
            </button>
        </div>
       </div>
        <ul class="nav">
            <li v-for="index in 8"></li>
        </ul>
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

                 }
         },
    computed:{

             },
    created() {

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
.left {
    width: calc((80%)  );
    height:100%;
    background-color: cadetblue;
    border-radius: 8px;
    overflow: hidden;

}
.bigpic {
    display: block;
    width: 100%;
    height: 80%;
    /* background-color: tomato; */
}
.bottom {
width: 100%;
height: 20%;

padding: 3%;


}
.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
margin-bottom: 2%;
}
.button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10%;
    height: 100%;
  
}
button {
  height: 100%;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    color: #ffffff;
    border-radius: 6px;
}

.nav  li{
    cursor: pointer;
    float: left;
    width: 12px;
    height: 12px;
    margin: 4px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.6);
}
.nav  li:hover {
    transform: scale(1.5);
    background-color: #ffffff;
}
</style>