<template>
 <div class="list">
    <list_left></list_left>
 </div>
</template>
 
<script>
 import list_left from './left.vue'
import { mapGetters,mapActions,mapMutations,mapState } from 'vuex';
 
export default {
    components:{
        list_left,
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
.list {
    padding: 0 5vw;
    width: 100%;
    /* 没有高度 */
    /* height: 60vh; */
    background-color: teal;
}
</style>