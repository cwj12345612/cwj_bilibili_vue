import {createApp} from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import {createPinia} from 'pinia'
import '@/assets/fonts/iconfont/colourless/iconfont.css'
import '@/assets/fonts/iconfont/colour/iconfont.css'
// import '@/utils/number'
createApp(App).use(createPinia()).use(router).mount('#app')
