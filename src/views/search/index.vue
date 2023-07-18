<template>
 <div class="search">
    <form >
      <i class="iconfont icon-sousuo" style="
      float: left;
      margin-left: 10px;
      font-size: 30px;
      color: skyblue;
      margin-top: calc((48px - 30px) / 2);
      "></i>
      <input type="text"  class="input" placeholder="搜索内容">
      <input type="submit" value="搜索" class="submit">
    </form>
 </div>
 <div class="filter">
      <ul class="classification">
            <a v-for="cl in classificationlist" :href="cl.href">
                  <div class="title">{{ cl.title }}</div><span class="count">{{ cl.count }}</span>
            </a>
      </ul>
      
 </div>
</template>
 
<script>
 
import { mapGetters,mapActions,mapMutations,mapState } from 'vuex';
 
export default {
    components:{
      
              },
    data() {
          return {
            classificationlist:[
                  {href:'#',title:"综合"},
                  {href:'#',title:"视频",count:'99+'},
                  {href:'#',title:"番剧",count:'99+'},
                  {href:'#',title:"影视",count:'99+'},
                  {href:'#',title:"直播",count:'99+'},
                  {href:'#',title:"专栏",count:'99+'},
                  {href:'#',title:"用户",count:'99+'},
            ]
                 }
         },
    computed:{

             },
    created() {
      this.$store.commit('systemConfig/setheaderclass',{
            position:'none',
            leftcolour:'black',
            rightcolour:'black',
            backgroundcolor:'palevioletred',
            searchexsits:false
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
.submit{
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
      height: 200px;
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
.count{
      /* float: left; */
      border-radius: 5px;
      background-color: #f1f2f3;
}
.title:hover
{
      border-bottom: solid blue  1px;
}
</style>