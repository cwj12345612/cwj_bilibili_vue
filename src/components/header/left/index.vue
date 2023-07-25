<template>
    <ul class="left">
        <li v-for="li in list">

            <a class="item" :href="li.href">
                <i v-if="li.icon" :class="li.icon"></i>
                <span>{{ li.title }}</span>
            </a>
        </li>

    </ul>
</template>
 
<script>

import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';

export default {
    components: {

    },
    data() {
        return {
            list: [
                { id: 1, icon: 'iconfont icon-bilibili', title: '首页', href: '#' },
                { id: 2, title: '番剧', href: '#' },
                { id: 3, title: '直播', href: '#' },
                { id: 4, title: '游戏中心', href: '#' },
                { id: 5, title: '会员购', href: '#' },
                { id: 6, title: '漫画', href: '#' },
                { id: 7, title: '赛事', href: '#' },
                { id: 8, title: '纪录片', href: '#' },
                { id: 9, title: 'LPL', href: '#' },
                { id: 10, icon: 'iconfont icon-xiazai', title: '下载客户端', href: '#' },
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
.left {
    width: 40%;
    height: 100%;
    /* background-color: teal; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left .item {
    display: block;
    /* display: flex; */
    align-items: center;
    color: #ffffff;
    font-size: 14px;
    transition: all 0.3s;
   
}

.left .item:hover  {
transform: translateY(-50%);
}
</style>