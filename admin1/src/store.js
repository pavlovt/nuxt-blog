import Vue from 'vue'
import Vuex from 'vuex'
import pathify from './core/pathify'

import * as stores from './stores'
// rename keys of the object from {authStore: {...}, ...} to {auth: {...}, ...}
const modules = _.mapKeys(stores, (val, key) => key.replace('Store', ''))
console.log(modules)
Vue.use(Vuex)

export default new Vuex.Store({
  modules: stores,
  state: {
    count: 0
  },
  mutations: {
    inc(state) {
      state.count++
    },
    incWith(state, n) {
      state.count += n
    }
  },
  actions: {

  },
  getters: {
    count(state) {
      return state.count      
    }
  },
  plugins: [
    pathify.plugin
  ]
})
