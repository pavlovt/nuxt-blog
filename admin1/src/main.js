import Vue from 'vue'
import corePlug from './core/core.plugin'
Vue.use(corePlug)
import App from './App.vue'
import store from './store'
window.store = store
import router from './router'
import './registerServiceWorker'


Vue.config.productionTip = false

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
