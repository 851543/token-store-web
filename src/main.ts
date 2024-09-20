import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/styles/sky/index.scss'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' //引入持久化插件

const app = createApp(App)

const piana = createPinia()
piana.use(piniaPluginPersistedstate)

app.use(piana)
app.use(router)

app.mount('#app')
