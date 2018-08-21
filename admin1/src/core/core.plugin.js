import core from './core'
window.core = core

// import * as form from '../parts/form'
// import * as seats from '../parts/seats'

import store from 'src/store'
import container from 'bootstrap-vue/es/components/layout/container'
import row from 'bootstrap-vue/es/components/layout/row'
import col from 'bootstrap-vue/es/components/layout/col'

export default {
  install(Vue, options) {
    // register methods and hooks in all app components
    Vue.mixin({
      created() { 
        // add the store to each component
        this.store = store
      },
      methods: { 
        
      }
    })

    /*const components = Object.assign(
      form,
      seats
    )*/

    // register all components
    // _(components).forIn((val, key) => Vue.component(key, val))

    Vue.filter('capitalize', function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    })

    Vue.component('container', container)
    Vue.component('row', row)
    Vue.component('vcol', col)
  }
}