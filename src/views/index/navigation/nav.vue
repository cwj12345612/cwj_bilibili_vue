<template>
 <div class="nav">
    <ul>
        <li v-for="nl in navlist"><a :href="nl.url">{{ nl.title }}</a></li>
       <li class="more">
        <a href="#">更多
            <i class="iconfont icon-xialaxiao"></i>
       </a></li>
    </ul>
 </div>
</template>
 
<script>
 import Mock from 'mockjs'
import { mapGetters,mapActions,mapMutations,mapState } from 'vuex';
 
export default {
    components:{
 
              },
    data() {
          return {
            navlist:Mock.mock({
                'list|23':[
                    {
                        id:Mock.mock("@id()"),
                        title:Mock.mock('@cword(1,3)'),
                        url:Mock.mock('@url')
                    }
                ]
            }).list
               
           
                 }
         },
    computed:{

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
.nav {
    height: 60%;
    width: 60%;
    /* background-color: tomato; */
    padding-right: 30px;
    border-right: solid 1px #e3e5e7;
    display: flex;
    margin-left: 40px;
    flex-grow: 1;
}
.nav ul {
    display: flex;
    justify-content: space-between;
   align-content: space-between;
   height: 100%;
   width: 100%;
   /* background-color: teal; */
flex-wrap: wrap;
}
.nav ul li {
    display: flex;
    font-size: 14px;
    height: 45%;
    width: 8%;
    background-color: #f6f7f8;
 justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 0.5px solid grey;
}

.nav ul li.more a:hover i {
    transform: rotate(180deg);
}
.nav ul li.more a {
    justify-content: center;
    align-items: center;
    display: flex;
}
.nav ul li.more a i {
    transition: all 0.3s;
}
</style>