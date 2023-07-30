import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import router from './routers'
import '@/assets/fonts/iconfont/colourless/iconfont.css'
import '@/assets/fonts/iconfont/colour/iconfont.css'
// import '@/utils/number'
createApp(App).use(store).use(router).mount('#app')
