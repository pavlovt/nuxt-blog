<template>
  <div class="home">
    count {{store.get('count')}}
    <a href="#" @click="store.set('inc')">Inc</a><br>
    <a href="#" @click="store.set('post/inc')">Inc posts</a><br>
    <ul>
      <!-- <li v-for="post in store.get('post/posts')">{{post.name}}</li> -->
      <li v-for="post in posts">{{post.title}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  computed: {
    /*count() {
      return this.$store.state.count * 2
    }*/
    // ...sync('*')
    // posts: sync('post/posts')
    posts() {
      return store.get('post/posts').slice(0, 10)
    }
  },
  mounted() {
    // console.log(store.get('post/posts'))
    store.set('post/list!')
  }
}
</script>
