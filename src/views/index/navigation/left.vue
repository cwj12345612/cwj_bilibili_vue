<template>
 <div class="left">
    <a class="item"
    v-for="item in items"
    :href="item.url"
    >
        <div class="img">
            <i :class="item.icon"></i>
        </div>
        <span style="text-align: center;flex-grow: 1;">{{ item.title }}</span>
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
            items:[
                {title:'追番',url:'#',icon:'iconfont icon-zhuifanshu'},
                {title:'动态',url:'#',icon:'iconfont icon-dongtaixuanzhong'},
                {title:'频道',url:'#',icon:'iconfont icon-fenquweixuanzhong'},
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
.left{
    /* background-color: teal; */
    height: 100%;
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    
}
.left .item {
    /* margin-right: 10px; */
    width: 46px;
   flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
   color: #18191c;
}
.item .img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border-radius: 23px;
    background-color: palevioletred;
}
</style>