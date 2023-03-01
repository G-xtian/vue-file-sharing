import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入全局css样式
import './assets/css/style.css'
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
