<template>
    <header>
        <header_left></header_left>
        <search></search>
        <header_right></header_right>
    </header>
</template>
 
<script>

import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';
import header_left from './left/index.vue'
import header_right from './right/index.vue'
import search from '@/components/search/index.vue'
export default {
    components: {
        header_left,
        search,
        header_right,
    },
    data() {
        return {
            windowscroll: false
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
<style scoped>
header {
    
    display: flex;
    width: 100%;
    /* flex-grow: 1; */
    height: 64px;
    justify-content: space-between;
    /* background-color: orange; */
    /* background: rgba(0, 0, 0, 0.3); */
    align-items: center;
    /* 相对父元素 */
    position: absolute;
    /* position: fixed;  top: 0; */

}

.scroll {
    background-color: orange;
    color: black;
}
</style>