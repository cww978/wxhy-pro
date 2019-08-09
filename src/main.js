import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 有赞UI库
import Vant from 'vant'
import 'vant/lib/index.css'
import 'normalize.css'
import './utils/fastclick'
// 修改浏览器标题
Vue.use(require('vue-wechat-title'))
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
