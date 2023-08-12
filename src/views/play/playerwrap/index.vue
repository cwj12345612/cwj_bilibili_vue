<template>
    <div class="playerWrap" :style="dynamicWH(undefined, { normal: 422, max: 1009, min: 422 },)">
        <div class="video" id="playwrapvideo">
        </div>
        <div class="sender" :style="dynamicWH(undefined, { normal: 46, max: 56, min: 46 },)">
            <div class="person_info">
                <span>115在观看</span><span>,</span>
                <span>已装填 2142 条弹幕</span>
            </div>
            <div class="cwjdanmu" title="关闭弹幕" @click="open = !open" style="cursor: pointer;">
                <i class="colourless bofangqi-danmukai" v-if="open"></i>
                <i class="colourless bofangqi-danmuguan" v-if="!open"></i>
            </div>
            <div class="setdanmu" style="cursor: pointer;" >
                <i class="colourless shezhi" style="font-size: 30px;"></i>
            </div>
            <div class="sendmsg">
                <span class="fontstyle">A</span>
                <input type="text" placeholder="发个弹幕" >

                <span class="liyi">弹幕礼仪</span>

                <div class="send" @click="senddanmu">
                    发送
                </div>
            </div>

        </div>
    </div>
</template>
 
<script setup>
import Player from 'xgplayer'
import Danmu from 'xgplayer/es/plugins/danmu'
// import FlvPlugin from 'xgplayer-flv'
// import 'xgplayer/dist/index.min.css';

import {
    ref,reactive,onMounted,computed,watch
} from 'vue'

import {
useStore
} from 'vuex'
const store=useStore()
import  Mock  from 'mockjs'
import dynamicsize from '@/utils/dynamicsize';
const dynamicWH = (width, height) => {
    return dynamicsize.dynamicWH(width, height).value
}
const open = ref(true)
let player =reactive({})
const comments =reactive(
    [{
  duration: 10000,         //弹幕持续显示时间,毫秒(最低为5000毫秒)
  id: 10086,               //弹幕id，需唯一
  start: 0,           //弹幕出现时间, 单位：ms 毫秒
  prior: false,          //该条弹幕优先显示，默认false
  color: false,          //该条弹幕为彩色弹幕，默认false
  txt: '测试弹幕',              //弹幕文字内容
  style: {                 //弹幕自定义样式
    color: '#ff9500',         //例：'#ff9500',
    fontSize: '20px',      // 例：'20px',
    padding: '2px 11px'        //例： 2px 11px',
  },
//   mode: String,           // 例：'top', 显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
  
},
{
  duration: 10000,         //弹幕持续显示时间,毫秒(最低为5000毫秒)
  id: 10010,               //弹幕id，需唯一
  start: 10010,           //弹幕出现时间, 单位：ms 毫秒
  prior: false,          //该条弹幕优先显示，默认false
  color: false,          //该条弹幕为彩色弹幕，默认false
  txt: '测试e3r4t5',              //弹幕文字内容
  style: {                 //弹幕自定义样式
    color: '#ff9500',         //例：'#ff9500',
    fontSize: '20px',      // 例：'20px',
    padding: '2px 11px'        //例： 2px 11px',
  },
//   mode: String,           // 例：'top', 显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
  
},
],
)

const senddanmu=()=>{
    // console.log('发送弹幕'+Date.now());
    const com={
  duration: 10000,         //弹幕持续显示时间,毫秒(最低为5000毫秒)
  id:  Date.now(),               //弹幕id，需唯一
//   start: 0,           //弹幕出现时间, 单位：ms 毫秒
  prior: false,          //该条弹幕优先显示，默认false
  color: false,          //该条弹幕为彩色弹幕，默认false
  txt: Mock.mock('@cword(10)'),              //弹幕文字内容
  style: {                 //弹幕自定义样式
    color: '#ff9500',         //例：'#ff9500',
    fontSize: '20px',      // 例：'20px',
    padding: '2px 11px'        //例： 2px 11px',
  },
//   mode: String,           // 例：'top', 显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
  
}
// console.log(player.plugins.danmu)
// Player.plugins.danmu.sendComment(com);

player.plugins.danmu.sendComment(com)

}
onMounted(()=>{
    player= new Player({
    id: 'playwrapvideo',
    url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',
    height:'100%',
    width:'100%',
    // plugins:[FlvPlugin],
    // download:true,
    pip:true,
    mini: true,
    plugins:[Danmu],
    danmu:{
        comments:comments,
        closeDefaultBtn:false
    }
})

})
</script>
<style scoped>
@import url('xgplayer/dist/index.min.css');
@import url('xgplayer/es/plugins/danmu/index.css');
.playerWrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background-color: thistle;
}

.playerWrap .video {
    width: 100%;
    flex-grow: 1;
    background-color: black;
}

.playerWrap .sender {

    flex-grow: 0;
    width: 100%;
    /* padding: 0 5px; */
    background-color: blanchedalmond;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.playerWrap .sender .cwjdanmu i {
    font-size:30px;
}

.playerWrap .sender .sendmsg {
    border-radius: 8px;
    overflow: hidden;
    width: 50%;
    height: 80%;
     background-color: #f1f2f3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
}

.fontstyle {
    cursor: pointer;
    font-size: 20px;
    color: #70767c;
}

.fontstyle:hover {
    color: #00aeec;
}

.sendmsg input {
    padding-left: 5px;
    width: 55%;
    color: #9499a0;
    height: 80%;
    background-color: #f1f2f3;
    border: none;
}

.sendmsg .liyi {
    cursor: pointer;
    font-size: 13px;
    display: flex;
    align-items: baseline;
     color: #9499a0;
}
.sendmsg .liyi:hover {
    color: #00aeec;
}
.sendmsg .send {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f1f2f3;
    height: 100%;
    width: 20%;
    background-color: #00aeec;
}
</style>
