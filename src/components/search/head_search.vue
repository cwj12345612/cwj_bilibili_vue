<template>
    <div class="search" :class="Object.values(ca)"
        :style="dynamicWH({ normal: store.state.pageconfig.nowpage.scroll == 0 ? 413 : 337, max: 500, min: 253 })"
        :aa="store.state.pageconfig.nowpage.scroll">
        <input v-model="text" type="search" @keyup.enter.native="submit" :placeholder="placeholder"
            :style="dynamicWH({ normal: store.state.pageconfig.nowpage.scroll == 0 ? 359 : 283, max: (2 + 8) * 2 + 424, min: (2 + 8) * 2 + 179 })">
        <button @click="submit">
            <i class="colourless sousuo"></i>
        </button>
    </div>
</template>
 
<script setup>

import {
    reactive,
    ref,
    computed, onMounted, watch
} from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
import {
    useStore
} from 'vuex'

const store = useStore();
//#region
import dynamicsize from '@/utils/dynamicsize';
import Mock from 'mockjs';
const dynamicWH = (width, height) => {
    return dynamicsize.dynamicWH(width, height).value
}
const scrollTop = ref(0);
onMounted(() => {
    window.addEventListener('scroll', () => {
        scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop;
    })
})
const ca = computed(() => {
    const cl = {};
    const name = store.state.pageconfig.nowpage.name
    cl.name = name
    if (scrollTop.value != 0) {
        cl.scroll = 'scroll'
    } else {
        cl.scroll = null
    }
    return cl
})
//#endregion
const placeholder = ref(Mock.mock('@cword(6,20)'))
const text = ref('')
const submit = () => {
    let temp = text.value.trim()
    temp = temp != '' ? temp : placeholder.value;
    //  console.log(temp)
    router.push({ path: '/search', query: { text: temp } })
}
</script>
<style scoped>
.search {
    height: 40px;
    display: flex;
    align-items: center;
    /* background-color: blueviolet; */
    justify-content: space-evenly;
    background-color: #ffffff;
    flex-grow: 0;
    flex-shrink: 0;
    border-radius: 8px;
    padding-left: 4px;
    /* padding-right: 48px; */
}

input[type='search'] {
    display: flex;
    flex-shrink: 1;
    height: 32px;
    flex-grow: 0;
    padding: 0 8px;
    border: 2px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0);
}

button {
    border-radius: 6px;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 32px;
    width: 32px;
}

button:hover {
    background-color: #f2f3f4de;
}

.search.homepage {
    background-color: #ffffff;
}

.search.scroll {
    background-color: #f2f3f4de;
}

.search.playpage,
.search.articlepage,
.search.spacepage
{
    background-color: #f2f3f4;
}</style>