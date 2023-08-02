<template>
<div  style="width: 100%; height: 500px;padding: 0 64px;" >
<searchpage_search v-if="store.state.pageconfig.nowpage.scroll ==0" style="position: absolute; top: 64px; left: 50%; transform: translateX(-50%);"></searchpage_search>
</div>

</template>
 
<script setup>
import searchpage_search from '@/components/search/searchpage_search.vue'
import {
ref,reactive,onMounted
    } from 'vue'
import { useRoute ,useRouter} from 'vue-router';

import {
useStore
    } from 'vuex'
const store=useStore()
</script>
<style scoped>

</style>