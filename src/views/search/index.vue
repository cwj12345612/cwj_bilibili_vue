<template>
      <div class="search">
            <form>
                  <i class="iconfont icon-sousuo" style="
      float: left;
      margin-left: 10px;
      font-size: 30px;
      color: skyblue;
      margin-top: calc((48px - 30px) / 2);
      "></i>
                  <input type="text" class="input" placeholder="搜索内容">
                  <input type="submit" value="搜索" class="submit">
            </form>
      </div>
      <div class="filter">
            <ul class="classification">
                  <a v-for="cl in classificationlist" :href="cl.href">
                        <div class="title">{{ cl.title }}</div><span class="count">{{ cl.count }}</span>
                  </a>
            </ul>
            <div class="detail" ref="detail">
                  <button class="more" @click="showclosedetail"> <span>更多</span> </button>
                 <div class="map" >
                  <!-- 存在bug -->
                  <ul class="one" >
                        <li class="tr_title">{{ otherlist[0].title }}</li>
                        <li v-for="ot in otherlist[0].list">{{ ot.title }}</li>
                  </ul>
                  <ul v-if="showdetail" class="ohter" v-for="ot in otherlist.slice(1)">
                        <li class="tr_title">{{ ot.title }}</li>
                        <li v-for="ol in ot.list">{{ ol.title }}</li>

                  </ul>
                 </div>
                 
            </div>
      </div>
      <div class="list">
            
      </div>
</template>
 
<script>

import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';

export default {
      components: {

      },
      data() {
            return {
                  showdetail: false,
                  classificationlist: [
                        { href: '#', title: "综合" },
                        { href: '#', title: "视频", count: '99+' },
                        { href: '#', title: "番剧", count: '99+' },
                        { href: '#', title: "影视", count: '99+' },
                        { href: '#', title: "直播", count: '99+' },
                        { href: '#', title: "专栏", count: '99+' },
                        { href: '#', title: "用户", count: '99+' },
                  ],
                  otherlist: [
                        {
                              id: 1, title: '综合排序', list: [
                                    { href: '#', title: '最多播放' },
                                    { href: '#', title: '最新发布' },
                                    { href: '#', title: '最多弹幕' },
                                    { href: '#', title: '最多收藏' },
                              ]
                        },
                        {
                              id: 2, title: '全部时长', list: [
                                    { href: '#', title: '10分钟以下' },
                                    { href: '#', title: '10-30分钟' },
                                    { href: '#', title: '30-60分钟' },
                                    { href: '#', title: '60分钟以上' },
                                   
                              ]
                        },
                        {
                              id: 3, title: '全部分区', list: [
                                    { href: '#', title: '动画' },
                                    { href: '#', title: '番剧' },
                                    { href: '#', title: '国创' },
                                    { href: '#', title: '音乐' },
                                    { href: '#', title: '舞蹈' },
                                    { href: '#', title: '游戏' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                                    { href: '#', title: '知识' },
                              ]
                        },
                       
                  ],
                  videolist: [
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                        { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                  ],
            }
      },
      computed: {

      },
      created() {
            this.$store.commit('systemConfig/setheaderclass', {
                  position: 'none',
                  leftcolour: 'black',
                  rightcolour: 'black',
                  backgroundcolor: 'palevioletred',
                  searchexsits: false
            })
      },
      mounted() {

      },
      methods: {
            showclosedetail(){
                  // console.log('df')
                  this.showdetail=!this.showdetail
              if(this.showdetail){
                  this.$refs.detail.style.height=(50 + (32 + 15)*3)+'px'
                    }    
            }
      },
      watch: {

      },

      beforeCreate() {

      },
      beforeDestroy() {

      },
      deactivated() {

      },
}
</script>
<style scoped>
.search {
      width: 100%;
      height: 50px;
      background-color: orange;
      position: relative;
}

form {
      position: absolute;
      width: 640px;
      height: 48px;
      background-color: #f6f7f8;
      top: 1px;
      left: calc(50% - (640px / 2));
      border-radius: 10px;

      /* line-height: 48px; */
}

.input {
      padding-left: 5px;
      background-color: #f6f7f8;
      border: none;
      float: left;
      height: 36px;
      margin-top: calc((48px - 36px) / 2);
      width: calc(100% - (10px + 30px + 100px));
}

.submit {
      display: block;
      float: right;
      background-color: skyblue;
      width: 100px;
      height: 38px;
      border: none;
      margin-top: calc((48px - 38px) / 2);
      border-radius: 10px;
}

.filter {
      margin-top: 20px;
      width: 100%;

      background-color: palevioletred;

}

.classification {
      height: 50px;
      width: 100%;
      /* background-color: green; */
      padding: 0 var(--index-padding-leftrigth);
      line-height: 50px;
      border-bottom: solid gray 1px;
}

.classification a {
      color: black;
      float: left;
      margin-right: 50px;

}

.title {
      /* background-color: orange; */
      text-align: center;
      height: 45px;
      float: left;
}

.count {
      /* float: left; */
      border-radius: 5px;
      background-color: #f1f2f3;
}

.title:hover {
      border-bottom: solid skyblue 5px;
}

.detail {
      padding: 10px var(--index-padding-leftrigth) 0 var(--index-padding-leftrigth);
      width: 100%;
      height: 50px;
      background-color: blueviolet;
      position: relative;
      transition: all 0.5s;
}

button.more {
      cursor: pointer;
      padding: 0 10px;
      text-align: center;
      line-height: 34px;
      border-radius: 6px;
      top:10px;
      width: 95px;
      height: 34px;
      position: absolute;
      right: var(--index-padding-leftrigth);
}
ul {
      height: 32px;
}
ul:nth-child(n+2){
      margin-top: 15px;
}
.map li {
      cursor: pointer;
      font-size: 14px;
      float: left;
      margin-right: 10px;
      height: 32px;
      line-height: 32px;
      border-radius: 6px;
      text-align: center;
      padding:0 15px;
      
}
.tr_title {
      background-color: #dff6fd;
}
</style>