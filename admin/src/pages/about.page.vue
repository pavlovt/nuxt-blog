<template>
  <div class="about">
    <h2>Posts</h2>
    <xinput name=title label=Filter v-model=title />
    <ul>
      <li v-for="post in posts" @click=show(post) :key=post.id>{{post.title}}</li>
    </ul>
  </div>
</template>
<script>
   
  export default {
    name: 'about',
    title: 'About',
    path: '/about',

    data() {
      return {
        title: null,
        posts: [],
      }
    },

    mounted() {
      // this.act('posts/get')
      // .then(res => this.posts = res)
      // this.get();
    },

    methods: {
      show(post) {
        msg.info(`id: ${post.id}; body: ${post.body}`)
      }
    },
  }
</script>