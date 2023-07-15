<template>
    <div class="navigation">
        <div class="left">
            <a :href="li.herf" v-for="li in left_piclist">
                <img class="pic" :src="li.src" />
                <span>{{ li.title }}</span>
            </a>
          
        </div>
        <div class="nav">
            <a :href="li.href" v-for="li in navlist">{{ li.title }}</a>
        </div>
        <div class="right">
            <a :href="li.herf" v-for="li in right_iconlist">
            <i :class="`iconfont ${li.iclass}`" ></i>
            <span>{{ li.title }}</span>
            </a>
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
            left_piclist: [
                { title:'动态',src: require('@/assets/images/头像.png'),herf:'#' },
                { title:'热门',src: require('@/assets/images/头像.png'),herf:'#' },
                { title:'频道',src: require('@/assets/images/头像.png'),herf:'#' },
               
            ],
            navlist:[
                {title:'番剧',href:'#',},
                {title:'电视剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
                {title:'番剧',href:'#',},
            ],
            right_iconlist:[
                {title:'专栏',herf:'#',iclass:'icon-wodeguanzhu'},
                {title:'活动',herf:'#',iclass:'icon-wodeguanzhu'},
                {title:'社区中心',herf:'#',iclass:'icon-wodeguanzhu'},
                {title:'直播',herf:'#',iclass:'icon-wodeguanzhu'},
                {title:'课堂',herf:'#',iclass:'icon-wodeguanzhu'},
                {title:'新歌热榜',herf:'#',iclass:'icon-wodeguanzhu'},
            ]
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
.navigation {
    width: 100%;
    padding: 0 var(--index-padding-leftrigth);
    height: 110px;
    /* background-color: aqua; */
}

.left {
    /* position: relative; */
    float: left;
    margin-top: calc((110px - 72px) / 2);
    width: 17%;
    height: 72px;
    /* background-color: blue; */
}

.left a {
    /* margin-top: calc((110px - 72px) / 2); */
    width: 46px;
    float: left;
    height: 72px;
    margin-right: 24px;
    color: black;
}

.left a .pic {
    height: 46px;
    width: 46px;
    border-radius: calc(46px / 2);
    /* background-color: aqua; */
}

.left a span {
    text-align: center;
    display: block;
    width: 100%;
}

.nav {
    float: left;
    height: 66px;
    /* background-color: palegreen; */
    width: 62%;
    margin-top: calc((110px - 66px)  / 2);
    
}

.nav a {
    color: #61666d;
    float: left;
    height: 28px;
    text-align: center;
    line-height: 28px;
    margin-right: 10px;
     width: calc((100% - (10px * 10)) / 11);
     background-color: #f6f7f8;
     border-radius: 10px;
}
.nav a:nth-child(-n+11) {
    margin-bottom: 10px;
}
.nav a:nth-child(11n){
    margin-right: 0;
}
.right {
    float: right;
    height: 66px;
    width: 19% ;
    margin-top: calc((110px - 66px) / 2);
    /* background-color: orange; */
    border-left: solid 1px ;

}
.right a {
    color: black;
    text-align: center;
    line-height: 28px;
    height: 28px;
    float: left;
    width: 72px;
}
.right a:nth-child(-n+3){
    margin-bottom: calc(66px - (28px * 2));
}
.right a:nth-child(3n){
    width: 95px;
}
</style>