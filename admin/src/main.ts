import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import container from 'bootstrap-vue/es/components/layout/container'
import row from 'bootstrap-vue/es/components/layout/row'
import col from 'bootstrap-vue/es/components/layout/col'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);

Vue.component('container', container)
Vue.component('row', row)
Vue.component('xcol', col)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
