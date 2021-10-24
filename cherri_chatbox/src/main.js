import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"

import i18n from './i18n'

const myapp = createApp(App)
myapp.use(store)
myapp.use(router)
myapp.use(i18n)
myapp.mount("#app");
