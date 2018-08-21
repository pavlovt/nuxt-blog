import Vue from 'vue'
import _ from 'lodash'
// import * as form from '../parts/form'
import store from '../store'
import container from 'bootstrap-vue/es/components/layout/container'
import row from 'bootstrap-vue/es/components/layout/row'
import col from 'bootstrap-vue/es/components/layout/col'

import * as filters from './filters'
filters = _.mapKeys(filters, (val, key) => key.replace('Filter', ''))
console.log('filters', filters)
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

    _(filters).forIn((val, key) => Vue.filter(key, val))

    Vue.component('container', container)
    Vue.component('row', row)
    Vue.component('vcol', col)
  }
}