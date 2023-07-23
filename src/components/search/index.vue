<template>
 <div class="search">
      <input type="text" placeholder="请输入搜索内容">
      <button class="icon">
            <i class="iconfont icon-sousuo"></i>
      </button>
 </div>
</template>
 
<script>
 
import { mapGetters,mapActions,mapMutations,mapState } from 'vuex';
 
export default {
    components:{
 
              },
    data() {
          return {

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
.search {
      background-color: #f1f2f3;
      height: 70%;
      width: 20%;
     border-radius: 8px;
     overflow: hidden;
     padding-left: 8px;
     display: flex;
     justify-content:center;
     align-items: center;
}
.search input {
      width: 80%;
      height: 100%;
     background-color: #f1f2f3;
      padding: 3px 0;
      padding-left: 5px;
      border: none;
}

.search .icon {
      cursor: pointer;
      width: 32px;
      height: 32px;
      /* background-color: blueviolet; */
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      /* color: skyblue; */
}
</style>