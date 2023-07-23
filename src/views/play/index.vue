<template>
 <div class="play">
      <div class="left">
            <div class="top">
                  <h1 class="title">
                        蜡笔小新10086
                  </h1>
                  <div class="detail">
                        <span><i class="iconfont icon-bofangshu"></i>117万</span>
                        <span><i class="iconfont icon-danmushu"></i>666</span>
                        <span>2022-10-10</span>
                        <span><i class="iconfont icon-guanbi" style="color: red;"></i>未经作者授权，禁止转载</span>
                  </div>
                  
            </div>
            <div class="video">
                  <video controlsList='nofullscreen nodownload noremote nofootbar'  controls>
                        <source 
                        src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4" 
                        type="video/mp4">
                  </video>
                  <div class="send">
                        <div class="info">
                              <span>88人在观看</span><span>,</span>
                              <span>19998条弹幕</span>
                        </div>
                        <div class="danmuset">
                             
                                    <i :class="`iconfont icon-bofangqi-${opendanmu ? 'danmukai' :'danmugundongguan'}`" @click="opendanmu=!opendanmu"></i>
                                    <i class="iconfont icon-shezhi1"></i>
                        </div>
                        <div class="input">
                              <div class="left">
                                    A
                              </div>
                              <input type="text" placeholder="发个弹幕见证一下">
                              <div class="right" style="color: #18191c;">
                                    发送
                              </div>
                        </div>
                  </div>
            </div>
            <div class="operation">
                  <div class="operation_left">
                      
                              <div>  <i class="iconfont icon-zan"></i>  <span>8.9万</span></div>
                              <div>  <i class="iconfont icon-Bbi"></i>   <span>8.9万</span></div>
                              <div>  <i class="iconfont icon-shoucang"></i>   <span>8.9万</span></div>
                              <div>  <i class="iconfont icon-fenxiang"></i>  <span>8.9万</span></div>
                       
                  </div>
                  <div class="operation_right">
                        <div>                  <i class="iconfont icon-tousu"></i>                           <span>稿件投诉</span>  </div>
                   
                  </div>
            </div>
            <!-- <div class="label">
                  <div class="labeldetail">
                        你个地方我尽可能的方法搜索框
                  </div>
                  <div class="labellist">
                        <div class="item"></div>
                        <div class="item"></div>
                        <div class="item"></div>
                        <div class="item"></div>
                        <div class="item"></div>
                  </div>
            </div> -->
      </div>
      <div class="right">
            <div class="author">
                  <img src="../../assets/images/头像.png"
                  style="width: 48px;height: 48px;border-radius: 24px;
                 
                  "
                  alt="">
                  <div class="infoauthor">
                        <div class="infotop">
                              <a href="#" class="upname">author</a>
                              <a href="#" class="upmsg">
                                    <i class="iconfont icon-sixin"></i>
                                    <span>发私信</span>
                              </a>
                        </div>
                        <div class="infobottom">
                             <a href="#" class="cd">充电</a>
                             <a href="#" class="gz">
                              <span><i class="iconfont icon-tianjia"></i></span>
                              <span>关注</span><span>888</span></a>
                        </div>
                  </div>
            </div>
            <div class="list">
                  <div class="set">
                        <span>接下来播放</span>
                        <div class="autoplay">
                              <span>自动连播</span>
                              <i  @click="autoplay=!autoplay" style="cursor: pointer;margin-left: 5px;" :class="`iconfont ${autoplay ? 'icon-xiazaiwancheng' :'icon-guanbi'}`"></i>
                        </div>
                        <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>       <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>
                        <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>
                        <div class="autovideo">
                              <img src="../../assets/images/视频图片.png" alt="">
                              <div class="videodetail">
                                    <a href="#" style="color: #18191c;" class="videotopdeailtop">
                                          【补档】如来到底来没来   如来（原视频完整版）
                                    </a>
                                    <a href="#" style="color: #989da4;" class="videoauthor">
                                          <i class="iconfont icon-UPzhu"></i>
                                          <span>你好世界</span>
                                    </a>
                                    <div class="videoother" style="color: #989da4;">
                                          <span style="margin-right: 10px;">
                                                <i class="iconfont icon-bofangshu"></i>
                                                55.4万
                                          </span>
                                          <span>
                                                <i class="iconfont icon-danmushu"></i>
                                                3222
                                          </span>
                                    </div>
                              </div>
                        </div>
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
            opendanmu:true,
            autoplay:true,
                 }
         },
    computed:{

             },
    created() {
      this.$store.commit('systemConfig/setheaderclass', {
                  position: 'none',
                  leftcolour: 'black',
                  rightcolour: 'black',
                  backgroundcolor: '#ffffff',
                  searchexsits: false
            })
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
.play {
      width: 100%;
      height: 800px;
      padding: 0 var( --index-padding-leftrigth);
      /* background-color: orange; */
     
}
.left {
      width: 70%;
      height: 100%;
      float: left;
      background-color: pink;
}
.left .top {
      background-color: aqua;
      width: 100%;
      height: 104px;
      padding-top: 22px;

}
.left .top .title {
      width: 100%;
      font-style: normal;
      height: 28px;
      font-size: 20px;
    
}
.top .detail  {
      margin-top: 10px;

}
.top .detail span {
      color: #9499a0;
      margin-right: 10px;
}
.video {
     width: 100%;
     height: 570px;
     background-color: tomato; 
}
video {

      width: 100%;
      /* height: 500px; */
      display: block;
}
/* //所有控件 */
    /* video::-webkit-media-controls-enclosure{ 
        display: none;
    } */
.send {
      width: 100%;
      height: 50px;
     
      background-color: #ffffff;
      padding: 0 12px;

}
.info{
      float: left;
      color: #61666d;
      height: 100%;
      line-height: 50px;
}
.danmuset {
      float: left;
      height: 100%;
      line-height: 50px;
      margin-left: 50px;
}
.danmuset i {
      margin-right: 20px;
      cursor: pointer;
      font-size: 30px;
}
.input {
      background-color: #f4f4f4;
      margin-top: calc((50px - 32px) / 2);
      float: right;
      width: 60%;
      height: 32px;
      background-color: aqua;
      border-radius: 8px;
      overflow: hidden;
}
.input .left {
      background-color: #f4f4f4;
      float: left;
      height: 32px;
      line-height: 32px;
      margin-left: 10px;
      cursor: pointer;
      width: 20px;
      font-size: 25px;
}
.input input {
      background-color: #f4f4f4;
      float: left;
      height: 100%;
      padding-left: 5px;
      width: 80%;
      border: none;
}
.input .right {
      cursor: pointer;
float: right;
width: 70px ;
height: 100%;
line-height: 32px;
text-align: center;
color: #ffffff;
      background-color: #00aeec;
      padding: 3px;
}
.operation {
      width: 100%;
      height: 50px;
      /* background-color: teal; */
     
      border-bottom: #61666d 1px solid;
}
.operation_left {
    float: left;
      height: 100%;
      line-height: 50px;
}
.operation_left div{
      float: left;
      margin-right: 20px;
      font-size: 20px;
}
.operation_left div i {
      cursor: pointer;
      font-size: 20px;
}
.operation_right{
      float: right;
      height: 100%;
      line-height: 50px;
}
.operation_right div {
      float: left;
      cursor: pointer;
      margin-left: 20px;
}
.label {
      width: 100%;
      height: 70px;
      background-color: teal;
      padding-top: 10px;
}
.right {
      margin-left: 40px;
      float: right;
      height: 100%;
      width: calc(30% - 40px );
      /* background-color: #00aeec; */
      display: flex;
      flex-wrap: wrap;    
}

.author{
      width: 100%;
      height: 104px;
      /* background-color: brown; */
      display: flex;
      align-items: center;
      justify-content: center;
}
.infoauthor {
      width: 100%;
      height: 48px;
     
      /* background-color: chartreuse; */
      
}
.infotop .upname {
      margin-right: 10px;
}
.infotop a {
      color: #61666d;
}
.infobottom {
      margin-top: 5px;
      width: 100%;
      height: 30px;
      /* background-color: aqua; */
display: flex;
justify-content: space-evenly;
}
.infobottom .cd {
      border-radius: 8px;
      display: flex;
     justify-content: center;
    align-items: center;
      height: 100%;
      width: 20%;
    border: #00aeec solid;
      /* background-color: teal; */
      margin-right: 10px;
}
.infobottom .gz {
      display: flex;
      border-radius: 8px;
      background-color: #00aeec;
     justify-content: center;
    align-items: center;
      height: 100%;
      width: calc(100% - (10px + 20%))
      
      
}
.infobottom a {
      color: #ffffff;
    
}
.infobottom a span {
      margin-right: 5px;
}
.right   .list {
      width: 100%;
      height: calc(100% - 104px);
      /* background-color: blueviolet; */
}
.right .list .set {
      margin-top: 20px;
      width: 100%;
      height: 125px;
      /* background-color: tomato; */
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      font-size: 16px;
      margin-bottom: 10px;
      border-bottom: solid 1px  gray;
}
.autovideo {
      display: flex;
      width: 100%;
      height: 90px;
      margin-bottom: 10px;
      /* background-color: teal; */
      justify-content: space-between;
}
.autovideo img {
      border-radius: 8px;
     width: 40%;
}
.autovideo .videodetail {
      height: 100%;
      width: 60%;
      display: flex;
     flex-direction: column;
      justify-content: flex-start;
}
.videoother {
      display: flex;
      justify-content: flex-start;
}
</style>