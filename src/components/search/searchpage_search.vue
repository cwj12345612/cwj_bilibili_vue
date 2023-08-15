<!-- 搜索页的搜索组件 -->
<template>
<div class="searchpage_search" :class="ca" :style="style">
    <i class="colourless sousuo" style="font-size: 25px;color: #00aeec;margin-left: 15px;"></i>
    <input type="search" :style="dynamicWH({normal:466,max:468,min:308})" placeholder="请输入搜索内容"  v-model="text" @keyup.enter.native="submit">
    <button @click="submit" @keyup.enter="submit">搜索</button>
</div>

</template>
 
<script setup>


import {
reactive,ref,
onMounted,
computed,
watch
    } from 'vue'
    import {useRoute,useRouter} from 'vue-router'
    const route=useRoute()
    const router=useRouter()
import {
useStore
    } from 'vuex'
const store=useStore()
//#region
defineProps({
    ca:Object
})
import dynamicsize from '@/utils/dynamicsize';
const style=dynamicsize.dynamicWH({normal:640,max:640,min:480})
const dynamicWH=(width,heigth)=>{
    return dynamicsize.dynamicWH(width,heigth).value
}
//#endregion
const text=ref('')
onMounted(()=>{
    // console.log(JSON.stringify(route))
    // console.log(route.matched)
   text.value= route.query.text
})
const submit=()=>{
    // console.log(text.value+"#"+Date.now())
  const temp= text.value.trim()
 if(temp==='') {
    alert('请输入搜索内容')
    return false;
 }else {
    router.push({name:'searchpage',query:{text:temp}})
 }
}
</script>
<style scoped>
.searchpage_search {
   
    background-color: #f2f3f4;
    height: 48px;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
input[type='search']{
height: 36px;
border: none;
border-radius: 8px;
}
button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
  width: 100px;
  background-color: #00aeec;
  border-radius: 8px;
  border: none;
}
</style>