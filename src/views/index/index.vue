<template>
      <div class="index">
          <index_header></index_header>
      </div>
</template>
 
<script >
 import index_header from './header/index.vue'
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';
import navigation from './navigation/index.vue'
import slideshowvideos from './slideshowvideos/index.vue'
import list from './list/index.vue'
export default {
      components: {
            index_header,
           
      },
      data() {
            return {
                  big_pic: require('@/assets/images/header.png')

            }
      },
      computed: {

      },
      created() {

      },
      mounted() {

      },
      watch: {

      },

      beforeCreate() {

      },
      beforeDestroy() {

      },
      deactivated() {

      },
}
</script>
<style  scoped>
.index {
      width: 100vw;
      height: 100vh;
      
}


</style>