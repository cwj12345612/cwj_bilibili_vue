<template>
 <div class="right">
    <a class="item" 
    v-for="item in itemlist"
    :href="item.url"
    >
        <i v-if="item.icon" :class="item.icon"></i>
        <span>{{ item.title }}</span>
 </a>

 </div>
</template>
 
<script>
 
import { mapGetters,mapActions,mapMutations,mapState } from 'vuex';
 
export default {
    components:{
 
              },
    data() {
          return {
            itemlist:[
                {icon:'iconfont icon-16', url:'#',title:'音乐'},
                {icon:'iconfont icon-huodongxiangqu', url:'#',title:'活动'},
                {icon:'iconfont icon-shequ', url:'#',title:'社区中心'},
                {icon:'iconfont icon-zhibo', url:'#',title:'直播'},
                {icon:'iconfont icon-ketang', url:'#',title:'课堂'},
                {icon:'iconfont icon-yinle', url:'#',title:'新歌热榜'},
            ]
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
.right {
    width: 20%;
    height: 60%;
    /* background-color: blueviolet; */
    display: flex;
    justify-content: center;
    align-content: space-around;
    flex-wrap: wrap;
    padding-left: 1%;
}
.right .item  {
    /* display: block; */
    font-size: 14px;
    /* color: black; */
   width: calc((100% / 3) - calc(1%));
}
.right .item:hover{
    color: rgb(32, 117, 221);
}
</style>