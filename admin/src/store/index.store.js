import Vue from 'vue'
import Vuex from 'vuex'
// import post from './posts.store'
// import auth from './auth.store'
import * as stores from './'
console.log('stores', stores)

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  // strict: debug,
})