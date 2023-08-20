<template>
<ul class="rightlist"
:style="pageconfigStore.dynamicWH({normal:466,max:482,min:326})"
>
<li class="headavatar">
            <a :href="headavatar.href">
                <img :src="headavatar.avatarsrc" :alt="headavatar.id">
            </a>
        </li>

        <li class="item" v-for="li in list" >
            <a :href="li.href" class="item"
            :title="li.title"
            :class="pageconfigStore.globalclass"
            >
                <i :class="li.icon" v-if="li.icon"></i>
                <span 
                v-if="isshowspan"
                >{{ li.title }}</span>
            </a>
          
        </li>
        <li class="constcontribute"
        :style="pageconfigStore.dynamicWH({ normal: 90, max: 90, min: 34 })"
        >
            <a :href="constcontribute.url">
                <i v-if="constcontribute.icon" :class="constcontribute.icon"></i>
                <span 
                v-if="isshowspan"
                >
                    {{ constcontribute.span}}
                </span>
            </a>
        </li>
</ul>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'

import { usepageconfigStore } from '@/pinia/pageconfig.js'
import {useRoute,useRouter} from 'vue-router'
const pageconfigStore = usepageconfigStore()

const route=useRoute()
const router=useRouter()
// #endregion
//是否显示文字
const isshowspan=computed(()=>{
   const width= pageconfigStore.dynamicWH({normal:466,max:482,min:326}).width
    const min=380
   return width.replace("px","") > min
})
// #region  模拟数据 mockjs
import  Mock  from 'mockjs';
const headavatar = reactive({
    id: Mock.mock('@id()'),
    avatarsrc: require('@/assets/images/头像.png'),
    href: Mock.mock('@url()')
})
const constcontribute = reactive({
    url: Mock.mock('@url()'),
    span: '投稿',
    icon: 'colourless tianjia'
})
const list = reactive([
    { id: 1, title: '大会员', href: '#', icon: "colourless wodedahuiyuan" },
    { id: 2, title: '消息', href: '#', icon: "colourless sixin" },
    { id: 3, title: '动态', href: '#', icon: "colourless zhuti" },
    { id: 4, title: '收藏', href: '#', icon: "colourless wodeshoucang" },
    { id: 5, title: '历史', href: '#', icon: "colourless lishijilu1" },
    { id: 6, title: '创作中心', href: '#', icon: "colourless chuangzuozhongxin" },
])
//#endregion

</script>
<style scoped>
.rightlist{
    height: 50px;
    /* background-color: teal; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.headavatar{
    width: 60px;
    height: 50px;
    padding-right: 10px;
}
.headavatar a{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.headavatar img {

    height: 38px;
    width: 38px;
    border-radius: 50%;
}
.constcontribute{
    height: 34px;
    background-color: #fb7299;
    border-radius: var( --border-radius-max);
}
.constcontribute a{
    color: #ffffff;
}
.item a{
    display: flex;
    flex-direction: column;
  color: #ffffff;
}
.item  span{
    font-size: 16px;
}
.item  i{
    font-size: 20px;
    transition: all 0.3s;
}
.item a:hover i {
    transform: translateY(-30%);
}
.item a.scroll{
    color: #61666d;
}
</style>
