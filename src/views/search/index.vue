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
            <div class="video" style="background-color: aqua;" v-for="video in videolist.slice(0,Math.min(5*6  , videolist.length))">  
                  <a class="pic" :href="video.href">
                    <img :src="video.pic" alt="#">
                    <span class="playsize">
                        <i class="iconfont icon-bofangshu"></i>
                       {{ video.detail.playsize }}
                    </span>
                    
                    <span class="danmusize">
                        <i class="iconfont icon-danmushu"></i>
                       {{ video.detail.danmusize }}
                    </span>
                    <span class="duration">
                        {{ video.detail.duration }}
                    </span>
                </a>
                <a href="#" class="title">
                    {{ video.title }}
                </a>
                <a class="bottom" href="#">
                 
                        <i class="iconfont icon-UPzhu" ></i>
                        <span class="name" title="小柒君TV">{{ video.detail.author }}</span>
                   
                    <span style="margin: 0 5px;">·</span>
                    <span class="time">{{ video.detail.time }}</span>
                </a>
              
            </div>
              <!-- 父元素高度为0  -->
            <div style="clear: both"></div>

      </div>
      <div class="page">
            <button  class="turning"   style="margin-right: 8px;" :style="`background-color: ${page.nowpage!=1 ? '#ffffff': 'none'};`">上一页</button>
            <button class="pp" :style="`background-color: ${page.nowpage== 1 ? 'skyblue':'#ffffff'};`" >1</button>
            <span class="begin" style="margin-right: 8px;" v-if="(page.nowpage - 1) >=page.size">...</span>
           <button class="pp" :style="`background-color: ${page.nowpage== ar ? 'skyblue':'#ffffff'};`" v-for="ar in pagearray"> {{ ar }}</button>
            <span class="last" style="margin-right: 8px;" v-if="(pagetotal-page.nowpage)>=page.size">...</span>
            <button class="pp" :style="`background-color: ${page.nowpage== pagetotal ? 'skyblue':'#ffffff'};`" >{{ pagetotal }}</button>
            <button  class="turning" style="margin-left: 8px;" :style="`background-color: ${page.nowpage!=pagetotal ? '#ffffff': 'none'};`">下一页</button>
      </div>
</template>
 
<script>

import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';

export default {
      components: {

      },
      data() {
            return {
                  page:{
                        nowpage:8,
                        arraysize:7,
                        count:30,
                        size:5
                  },
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
            pagetotal(){
              let count=   this.videolist.length / this.page.count
              count+= ((this.videolist.length % this.page.count ) !=0 ? 1 :0);
              
              return count<34 ? 34 :count ;
            },
            pagearray(){
                  let array=[];
                  if((this.page.nowpage - 1) < this.page.size) {
                       for(let i=2;i<=this.page.arraysize;i++){
                        // console.log(i)
                        array.push(i);
                       }
                  }else if((this.pagetotal-this.page.nowpage) < this.page.size){
                        for(let i=this.pagetotal-this.page.arraysize+1;i<=this.pagetotal-1;i++){
                              array.push(i);
                        }
                  }else {
                        let start=this.page.nowpage- parseInt(this.page.size / 2);

                        for(let i=start;i<start+this.page.size;i++)  {
                              array.push(i)
                        }            
                  }
                  // console.log(array);
                  return array;
            }
                  
            
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
                    } else {
                        this.$refs.detail.style.height='50px'
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
.list {
      width: 100%;
      padding: 0 var(--index-padding-leftrigth);
      background-color: orange;
      /* height: 500px; */
}
.list img {
    width: 100%;
    height: 100%;
        border-radius: 10px;

}
.video {
    
      padding: 0 10px;
    float: left;
    height: 225px;
    width: calc(100% / 5);
    border-radius: 10px;
    margin-bottom: 10px;
}

.video .pic {
        border-radius: 10px;
    display: block;
    position: relative;
    width: 100%;
    height: 70%;
}
.pic span {
    color: #f6f7f8;
    font-size: 15px;
}
.playsize {
    position: absolute;
    bottom: 0;
    left: 10px;
}
.danmusize {
    position: absolute;
    bottom: 0;
    left: 100px;
}
.duration {
    position: absolute;
    bottom: 0;
    right: 10px;
}
.list .title {
    color: #18191c;
    /* 内容过长显示两行，多余为省略号 */
    text-overflow: ellipsis;
    /*设置隐藏部分为省略号*/
    overflow: hidden;
    /*设置隐藏*/
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*设置显示行数，此处为2行，可设置其他数字*/
    -webkit-box-orient: vertical;
    width: 100%;
    height: 20%;
    padding: 5px 0;
    font-size: 15px;
}

.bottom {
    color: #9499a0;
    height: 10%;
    width: 100%;
    /* background-color: purple; */
    
}
.author {
    color: #9499a0;
}
.page {
      height: 34px;
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
}
.turning {
      cursor: pointer;
      height: 34px;
      padding: 0 15px;
     content: 42px;
     font-size: 14px;
     border: 1px solid;
     border-radius: 6px;
}
.pp {
      cursor: pointer;
      height: 34px;
      font-size: 14px;
      padding: 8px;
    width: 34px;
    margin-right: 8px;
      border-radius: 6px;
      border: 1px solid;
}
.pp:last-child {
      margin-right: none;
}
</style>