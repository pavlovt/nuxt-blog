export default {
  namespaced: true,
  
  state: {
    posts: [{name: 'q'}, {name: 'q1'}]
  },

  actions: {
    list({state}) {
      api.get(apis.posts)
      .then(res => {
        console.log('res', res)
        state.posts = res;
      })
    }
  },

  mutations: {
    inc(state) {
      state.posts.push({name: 'q' + state.posts.length})
    },
  },
}