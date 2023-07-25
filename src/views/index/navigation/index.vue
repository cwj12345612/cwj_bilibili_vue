<template>
 <div class="navigation">
    <navigation_left></navigation_left>
    <navigation_nav></navigation_nav>
    <navigation_right></navigation_right>
 </div>
</template>
 
<script>
 import navigation_left from './left.vue'
 import navigation_nav from './nav.vue'
 import navigation_right from './right.vue'
import { mapGetters,mapActions,mapMutations,mapState } from 'vuex';

export default {
    components:{
        navigation_left,
        navigation_nav,
        navigation_right
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
.navigation {
    padding: 0 64px;
    width: 100%;
    height: 24vh;
    max-height: 130px;
    min-height: 100px;
    background-color: orange;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>