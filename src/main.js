import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/fonts/iconfont/colourless/iconfont.css'
import '../src/assets/fonts/iconfont/colours/iconfont.css'
createApp(App).use(store).use(router).mount('#app')
