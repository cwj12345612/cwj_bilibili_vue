<template></template>
 
<script setup>

import {
      onMounted
} from 'vue'

import {

} from 'vuex'
import {
      useRoute
} from 'vue-router'
useRoute()
onMounted(() => {
      // console.log(useRoute().params.search)
})
</script>
<style scoped></style>