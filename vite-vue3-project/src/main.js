import { createApp } from 'vue';
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/index.js';
import axios from '@/apis/index.js';

const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.provide('$axios', axios)
app.mount('#app')


