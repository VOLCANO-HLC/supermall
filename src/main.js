import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/Toast'
import FastClick from 'fastclick'

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
// 安装插件toast
Vue.use(toast)

// 应用fastclick
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
