<template>
<div class="list">
    <div class="left">
        <div class="video"  v-for="video in videolist">
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
 </div>
 <div class="right">
    <div class="videocard"  v-for="video in videocardlist">
        <a :href="video.href" class="pic">
            <img :src="video.pic"  alt="#">
            <div class="icon">
                <i class="iconfont icon-dianshiju" ></i>
                <span style="color: black;font-size: 15px;">电视剧</span>
            </div>

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
            videolist:[
                  {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                {href:'#',pic:require('@/assets/images/视频图片.png'),title:'4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方',detail:{      author:'小柒君TV',                  time:'2023-7-15',       playsize:'15.7万',       danmusize:'1546',    duration:'10:16'    }        },
                     ],
          
                 }
         },
    computed:{
        videocardlist(){
           const len= this.videolist.length / 4;
          const yu= this.videolist.length % 4 ;
            return this.videolist.slice(0,(yu!=0 ? len+1 : len))  ;
        }
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
.list {
   width: 100%;
    padding: 0 var(--index-padding-leftrigth);

}
.left {
    /* display: flex; */
    float: left;
    width: 80%;
    /* background-color: blueviolet; */
    /* height: 100%; */
}

.left img {
    width: 100%;
    height: 100%;
        border-radius: 10px;

}

.video {
    padding: 0 10px;
    float: left;
    height: 225px;
    width: calc(100% / 4);
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
.title {
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
/* --------------------------- */
.right {
    float: right;
    /* background-color: orange; */
    width: 20%;
    height: 1000px;
    
}
.videocard {
    position: relative;
    width: 100%;
    height: 225px;
    background-color: gainsboro;
    /* background-color: green; */
    padding: 0 10px;
    margin-bottom: 10px;
}
.videocard img {
    
    width: 100%;
    height: 70%;
    border-radius: 10px;
}
.icon {
position: absolute;
top: 10px;
left: 20px;
width: 70px;
height: 20px;
background-color: whitesmoke;
text-align: center;
line-height: 20px;
}


</style>