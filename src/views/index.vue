<template>
 <h1>你好世界{{ aa }}</h1>
 <h2>tgb v csc</h2>
</template>
 
<script>
 
import { mapGetters,mapActions,mapMutations,mapState } from 'vuex';
 
export default {
    components:{
 
              },
    data() {
          return {
            aa:'defrvf v'
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
<style  scoped>
h1 {
      width: 50%;
      height: 50%;
      background-color: aqua;
}
h2 {
      width: 50%;
      height: 50%;
      background-color: gold;
}
</style>