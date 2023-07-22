<template>
 <div class="header" :style="`position:${headerclass.position}; background-color:${headerclass.backgroundcolor}`"  >
    <ul class="left">
        <template v-for="entry in left_list">
            <a :href="entry.href" :style="`color: ${headerclass.leftcolour};`">
                <span>{{ entry.title }}</span>
            </a>
        </template>
    </ul>
    <div v-if="headerclass.searchexsits" class="search">
        <input type="search" placeholder="3年A班">
        <i  class="iconfont icon-sousuo"></i>
    </div>
    <ul class="right">
        <div class="head_pic">
           <img src="@/assets/images/头像.png" alt="">
        </div>
        <template v-for="entry in right_list">
            <a  :href="entry.href" :style="`color: ${headerclass.rightcolour};`">
                <div class="icon" >
                    <i :class="`iconfont ${entry.icon}`" style="font-size: 27px;position: absolute;bottom: 0;left: 50%;margin-left: -13.5px;"></i>
                </div>
                <div class="title">
                    <span>{{ entry.title }}</span>
                </div>
            </a>
        </template>
        <div class="creation" >
            <a class="create" href="#" :style="`color: ${headerclass.uploadcolour};`">
                <i class="iconfont icon-tianjia"></i>
                <span>投稿</span>
            </a>
        </div>
    </ul>

 </div>
</template>
 
<script>
 
import { mapGetters,mapActions,mapMutations,mapState } from 'vuex';
 
export default {
    components:{
 
              },
    data() {
          return {
            left_list:[
                {
                title:'首页',
                href:'#',
                },
                {
                title:'番剧',
                href:'#',
                }, {
                title:'直播',
                href:'#',
                }, {
                title:'游戏中心',
                href:'#',
                }, {
                title:'会员购',
                href:'#',
                }, {
                title:'漫画',
                href:'#',
                }, {
                title:'纪录片',
                href:'#',
                }, {
                title:'影视',
                href:'#',
                }, {
                title:'赛事',
                href:'#',
                }, {
                title:'下载客户端',
                href:'#',
                },
            ],
            right_list:[
                {
                    title:'大会员',
                    icon:'icon-wodedahuiyuan',
                    href:'#'
                },
                {
                    title:'消息',
                    icon:'icon-sixin',
                    href:'#'
                },
                {
                    title:'动态',
                    icon:'icon-zhuti',
                    href:'#'
                },
                {
                    title:'收藏',
                    icon:'icon-shoucang',
                    href:'#'
                },
                {
                    title:'历史',
                    icon:'icon-lishijilu1',
                    href:'#'
                },
                {
                    title:'创作中心',
                    icon:'icon-chuangzuozhongxin',
                    href:'#'
                },
            ]
                 }
         },
    computed:{
        ...mapState({
            headerclass:(state)=>state.systemConfig.headerclass
        }),
        
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
div.header {
 
    --height : 64px
}
.header {
    height: var(--height);
    width: 100%;
    padding:0  24px;
    /* background-color: green; */
}
.left {
    float: left;
    height: 100%;
    margin-right: 2%;
    width: 42%;
    /* background-color: green; */
}
.left a {
   
    float: left;
    height: 100%;
    padding-right: 15px;
    /* background-color: teal; */
    text-align: center;
    line-height: var(--height);
    font-size: 14px;
    color: #ffffff;
}
.left a:last-child {
    padding-right: 0;
}
.left a:first-child::before {
    content: '\e6b4';
    font-family: 'iconfont';
}
.left a:last-child::before {
    content: '\e672';
    font-family: 'iconfont';
}
.search {
    float: left;
    width: 18%;
    height: 40px;
    margin-top: calc((var(--height) - 40px) / 2);
    background-color: #f1f2f3;
    border-radius: 8px;
    padding: 5px;
}
.search input {
    float: left;
    background-color: #f1f2f3;
    border: none;
    width: 85%;
    height: calc(40px - (2 * 5px));
    padding-left: 10px;
}
.search i {
    float: right;
    background-color: #f1f2f3;
    display: block;
    width: 15%;
    height: calc(40px - (2 * 5px));
    font-size: 30px;
    text-align: center;
    line-height:  calc(40px - (2 * 5px));
    cursor: pointer;
}
.right  {
    float: right;
    /* background-color: gold; */
   width: 38%;
   height: var(--height);
}
.right .head_pic {
    float: left;
    height: 100%;
    width: 10%;
    /* background-color: green;   */
    position: relative;
}
.head_pic img {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    top: calc((64px - 40px) / 2);
    border-radius: 50%;
    cursor: pointer;
}
.right a {
    float: left;
    height: 100%;
    width: 10%;
    /* background-color: blue; */
    margin-left: 1%;
    font-size: 13px;
    color: #ffffff;
    /* position: relative; */
}
.right .icon {
    width: 100%;
    height: 50%;
    /* background-color: green; */
  position: relative;
    text-align: center;
    
} 

.right .title {
    width: 100%;
    height: 50%;
    /* background-color: blueviolet; */
    text-align: center;
    /* line-height: calc(var(--height) / 2); */
}
.creation {
    float: right;
    height: 100%;
    width: 24%;
    /* background-color: brown; */
    position: relative;
}
.creation .create {
    height: 34px;
    width: 80%;
    background-color: #fb7299;
    position: absolute;
    right: 0;
    top: calc((var(--height) - 34px) / 2);
    border-radius: 15px;
    text-align: center;
    line-height: 34px;
    font-size: 18px;
}

</style>