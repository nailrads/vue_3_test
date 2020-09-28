import { createApp } from 'vue'
import Core from './settings/core/Core.vue'
import router from './router'
import store from './store'

createApp(Core).use(store).use(router).mount('#app')
