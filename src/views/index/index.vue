<template>

<div class="index">
<img :src="big_pic"  alt="">
<navigation></navigation>
<slideshowvideos></slideshowvideos>
</div>

</template>
 
<script >

import { mapGetters,mapActions,mapMutations,mapState } from 'vuex';
 import navigation from './navigation/index.vue'
 import slideshowvideos from './slideshowvideos/index.vue'
export default {
    components:{
    navigation,
    slideshowvideos
              },
    data() {
          return {
          big_pic:require('@/assets/images/header.png')
          
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

</style>