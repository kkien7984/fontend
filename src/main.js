import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css'
import '@/assets/css/owl.carousel.min.css'
import '@/assets/libs/owl.carousel.min.js'
// import '@/assets/libs/owl.js'
import Antd from 'ant-design-vue';
const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')
