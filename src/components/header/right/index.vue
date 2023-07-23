<template>
 <ul class="right">
   
       <li class="headavatar">
        
            <a :href="headavatar.href">
                <img :src="headavatar.avatarsrc"    :alt="headavatar.id">
            </a>
        
       </li>
       <li class="item"  
       v-for="li in list"
       >
        <a :href="li.href" class="item">
            <i :class="li.icon" v-if="li.icon"></i>
            <span>{{li.title}}</span>
        </a>
       </li>
       
     
     <li class="contribute">
       <a :href="contribute.url">
        <span>
            <i v-if="contribute.icon" :class="contribute.icon"></i>
            <span>{{ contribute.span }}</span>
        </span>
       </a>
     </li>
 </ul>
</template>
 
<script>
 import Mock from 'mockjs'
import { mapGetters,mapActions,mapMutations,mapState } from 'vuex';
 
export default {
    components:{
 
              },
    data() {
          return {
            headavatar:{
                id:Mock.mock('@id()'),
                avatarsrc:require('@/assets/images/头像.png'),
                href:Mock.mock('@url()')
            },
            contribute:{
                url:Mock.mock('@url()'),
                span:'投稿',
                icon:'iconfont icon-tianjia'
            },
            list:[
                {id:1,title:'大会员',href:'#',icon:"iconfont icon-wodedahuiyuan"},
                {id:2,title:'消息',href:'#',icon:"iconfont icon-sixin"},
                {id:3,title:'动态',href:'#',icon:"iconfont icon-zhuti"},
                {id:4,title:'收藏',href:'#',icon:"iconfont icon-wodeshoucang"},
                {id:5,title:'历史',href:'#',icon:"iconfont icon-lishijilu1"},
                {id:6,title:'创作中心',href:'#',icon:"iconfont icon-chuangzuozhongxin"},
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
    width: 30%;
    height: 100%;
    display: flex;
    /* background-color: tomato; */
    justify-content: space-between;
    align-items: center;
}
.headavatar {
    height: 100%;
    width: 12%;
    display: flex;
    /* background-color: blueviolet; */
    justify-content: flex-end;
    align-items: center;
}
.headavatar img {
 width: 38px;
 height: 38px;
 border-radius: 19px;

}
.right  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    color: #ffffff;
    
}
.right .item i {
    transition: all 0.3s;
}
.right .item:hover i {
    transform:translateY(-50%);
}

.right .contribute {
    border-radius: 8px;
    height: 70%;
    width: 25%;
    background-color: #fb7299;
    display: flex;
    justify-content: center;
    align-items: center;
   
}
.right .contribute a {
    color: #ffffff;
}
</style>