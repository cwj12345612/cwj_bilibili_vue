<template>
    <div class="slideshowvideos">
        <div class="left">
            <div class="img">
                <img :src="pic" alt="">
            </div>
            <div class="carouselbottom">
                <span class="carouseltitle">
                    【有奖征稿】与阿汤哥一起挑战无极限！
                </span>
                <span class="button">
                    <button style="margin-right: 5px;">
                        <i class="iconfont icon-fanhui"></i>
                    </button>
                    <button style="margin-left: 5px;">
                        <i class="iconfont icon-gengduo"></i>
                    </button>
                </span>

                <span class="trabecula">
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>
                    <li> <span></span> </li>

                </span>
            </div>
        </div>
        <div class="right">
            <div class="video" v-for="video in videolist">
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

                    <i class="iconfont icon-UPzhu"></i>
                    <span class="name" title="小柒君TV">{{ video.detail.author }}</span>

                    <span style="margin: 0 5px;">·</span>
                    <span class="time">{{ video.detail.time }}</span>
                </a>
            </div>

        </div>
    </div>
</template>
 
<script>

import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';

export default {
    components: {

    },
    data() {
        return {
            videolist: [
                { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
                { href: '#', pic: require('@/assets/images/视频图片.png'), title: '4KHDR日本云旅游漫步日本神奈川县镰仓高校前，放松解压城市环境音退还乙方为如果不地方VS法国法国不能回避VS v第三方', detail: { author: '小柒君TV', time: '2023-7-15', playsize: '15.7万', danmusize: '1546', duration: '10:16' } },
            ],
            pic: require('@/assets/images/轮播图.png')

        }
    },
    computed: {

    },
    created() {

    },
    mounted() {

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
.slideshowvideos {
    width: 100%;
    padding: 0 var(--index-padding-leftrigth);
    height: 450px;
    /* background-color: orange; */
}

.right {
    float: right;
    width: 60%;
    /* background-color: blueviolet; */
    height: 100%;

}

.right img {
    width: 100%;
    height: 100%;
}

.video {
    padding: 0 10px;
    float: left;
    height: 50%;
    width: calc(100% / 3);
}

.video .pic {
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

/* ----------------------------- */
.left {
    float: left;
    height: 100%;
    width: 40%;
    /* background-color: green; */
    border-radius: 10px;
}

.img {
    width: 100%;
    height: 70%;
    border-radius: 10px;

}

.img img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 100%;
}

.carouselbottom {
    width: 100%;
    height: calc((50% * 1.7) - (100% * 0.7) + 20px);
    /* background-color: bisque; */
    position: relative;
}

.carouseltitle {
    position: absolute;
    left: 10px;
    top: 20px;
}

.button {
    position: absolute;

    right: 10px;
    top: 20px;
    /* background-color: aqua; */
}

.button button {
    float: left;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
}

.trabecula {
    position: absolute;
    left: 20px;
    bottom: 20px;
}

.trabecula li {
    float: left;
    width: 12px;
    height: 12px;

}

.trabecula li span {
    margin-top: 2px;
    margin-left: 2px;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #ffffff66;
    cursor: pointer;
}</style>