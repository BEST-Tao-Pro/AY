// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
/* import './assets/main.css' */
import "element-plus/dist/index.css";
import App from './App.vue'
import router from './router'
import piniaPluginPersist from 'pinia-plugin-persist'
const  pinia=createPinia()
pinia.use(piniaPluginPersist)
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
