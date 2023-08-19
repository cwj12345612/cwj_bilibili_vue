<template>
    <header>
        头部组件
    </header>
</template>
<script setup>

import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { useStore, mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
const store = useStore()
const route = useRoute()
const router = useRouter()

</script>
<style scoped>
header {
    width: 100%;
    height: 64px;
    /* background: var(--transparency); */
    background-color: coral;
    position: fixed;
   
}
</style>
