
import Vue from 'vue'
import App from './App.vue'

// import '../plugins/element'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import router from './router/index.js'
import service from './service'

// Vue.prototype.axios = axios
Vue.use(ElementUI);
Vue.prototype.service = service   //挂载到原型，可以全局使用
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


