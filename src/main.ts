import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import '@/styles/sky/index.scss'

import '@/styles/sky/element-variables.scss'
import '@/styles/sky/index.scss'
import '@/styles/sky/home.scss'
// import 'vue-area-linkage/dist/index.css'

// sky样式表
import '@/styles/sky/newRJWMsystem.scss'
import '@/styles/sky/icon/iconfont.css'

import '@/icons/components'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' //引入持久化插件

const app = createApp(App)

const piana = createPinia()
piana.use(piniaPluginPersistedstate)

app.use(piana)
app.use(router)

app.mount('#app')
