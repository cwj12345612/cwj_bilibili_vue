<template>
    <div class="left_main_playwarp" :style="pageconfigStore.dynamicWH(undefined, { normal: 422, max: 1009, min: 422 })">
        <div id="playpage_bofanqi"></div>



        <div class="bottom" :style="pageconfigStore.dynamicWH(undefined, { normal: 46, max: 56, min: 46 })">
            <div class="videoinfo">
                <div class="line">
                    <span>{{ mock({ 'num|10-456': 456 }).num }}&nbsp;</span>
                    <span>用户正在观看</span>
                </div>
                <span>&nbsp;,&nbsp;</span>
                <div class="danmucount">
                    <span>已装填&nbsp;{{ mock({ 'num|100-34552': 34552 }).num }}&nbsp;条弹幕</span>
                </div>
            </div>

            <div class="root">
                <div class="setting">
                    <i class="colourless shezhi"></i>
                </div>
                <div class="send">
                    <span class="zi">A</span>
                    <div class="input">
                        <input type="text" placeholder="发个友善的弹幕见证当下">
                        <span class="liyi">
                           <span>弹幕礼仪</span>
                            <i class="colourless gengduo"></i>
                        </span>
                    </div>
                    <button class="submit">
                        发送
                    </button>
                </div>

            </div>
        </div>
        
    </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由 xgplayer视频播放器
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
import Player from 'xgplayer';
import Danmu from 'xgplayer/es/plugins/danmu'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion
const player = null
onMounted(() => {
    // let comments = []
    // for (let i = 0; i < 30; i++) {
    //     comments.push(
    //         {
    //             duration: parseInt(mock({ 'num|5000-30000': 30000 }).num),         //弹幕持续显示时间,毫秒(最低为5000毫秒)
    //             id: mock('@word(10)'),               //弹幕id，需唯一
    //             start: parseInt(mock({ 'num|300-70000': 700000 }).num),           //弹幕出现时间, 单位：ms 毫秒
    //             // prior: true,          //该条弹幕优先显示，默认false
    //             // color: true,          //该条弹幕为彩色弹幕，默认false
    //             txt: mock('@cword(5,10)'),              //弹幕文字内容
    //             style: {                 //弹幕自定义样式
    //                 color: mock('@color()'),         //例：'#ff9500',
    //                 fontSize: mock({ 'num|15-27': 27 }).num + 'px',      // 例：'20px',
    //                 padding: '2px 11px'        //例： 2px 11px',
    //             },
    //             mode: 'top',           // 例：'top', 显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll

    //         }
    //     )
    // }
    // console.log(comments.length)
    // comments.forEach(c=>{
    //     console.log(c)
    // })
 if(document.getElementById('playpage_bofanqi')){
       new Player({

        id: 'playpage_bofanqi',
        height: '100%',
        width: '100%',
        url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',

    })
 }
})
</script>
<style scoped>
@import 'xgplayer/dist/index.min.css';
@import 'xgplayer/es/plugins/danmu/index.css';

.left_main_playwarp {
    width: 100%;

    display: flex;
    flex-direction: column;

}

#playpage_bofanqi {
    background-color: black;
    width: 100%;
    height: 100%;
    flex-shrink: 1;

}

.left_main_playwarp .bottom {
    width: 100%;
    background-color: #ffffff;
    padding-right: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.bottom .videoinfo {
    flex-shrink: 0;
    font-size: 13px;
    /* background-color: palevioletred; */
    display: flex;
    color: #61666d;
}

.bottom .root {
    flex-shrink: 1;
    /* background-color: aquamarine; */
    height: 90%;
    width: 100%;
    display: flex;
   
    align-items: center;
    justify-content: center;
}

.root .send {
    height: 90%;
    border-radius: var(--border-radius-min);
    overflow: hidden;
    width: 90%;
    padding-left: 5px;
    background-color: rgb(241, 242, 243);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.send .zi {
    cursor: pointer;
    border-bottom: 2px solid rgb(97, 102, 109);
    font-size: 20px;
    color: rgb(97, 102, 109);
}
.send .zi:hover{
    color: #00aeec;
    border-bottom: 2px solid #00aeec;
}
.send .input {
    height: 80%;
    /* background-color: cadetblue; */
    width: 70%;
    display: flex;

}
.send .input input{
    background: none;
    height: 100%;
    border: none;
    /* width: 60%; */
    flex-grow: 1;
flex-shrink: 1;
}
.input .liyi{
   
    font-size: 13px;
    color: #9499a0;
   cursor: pointer;
   /* / flex-grow: 0; */
    display: flex;
    align-items: center;
   
}
.input .liyi:hover{
    color: #00aeec;
}
.submit{
    border: none;
    width: 20%;
    color: #ffffff;
    background-color: #00aeec;
    height: 100%;
}
.root .setting i{
    font-size: 35px;
  
}
.root .setting{
    margin-right: 12px;
    transition: all 0.5s;
}
.root .setting:hover {
    color: #00aeec;
    transform: rotate(90deg);
}
</style>
