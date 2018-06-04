import 'jquery'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.store'
import './registerServiceWorker'
import VeeValidate from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import corePlugin from './core/core.plugin'
// import global from './core/global'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(BootstrapVue)
Vue.use(corePlugin)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
