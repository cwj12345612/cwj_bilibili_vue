<template>
<div class="search"></div>

</template>
 
<script setup>

import {
      onMounted,
      ref,
} from 'vue'

import {

} from 'vuex'
import {
      useRoute
} from 'vue-router'
const search=ref()
const route=useRoute()
onMounted(() => {
      console.log(route.params.search)
      search.value=route.params.search
})
</script>
<style scoped>
.search{
      padding: 0 64px;
      display: flex;
      background-color: orange;
      width: 100%;
      height: 50vw;
}
</style>