import Vue from 'vue'
import Vuex from 'vuex'
import pathify from './pathify'
import posts from './posts.store'
import auth from './auth.store'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: [posts, auth],
	plugins: [ pathify.plugin ],
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
