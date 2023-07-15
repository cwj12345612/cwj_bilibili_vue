<template>
 <div class="search">
    <form >
      
      <input type="text"  class="input" value="搜索内容">
      <input type="submit" value="搜索">
    </form>
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
}

</style>