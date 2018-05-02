<template>
  <div class="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> | 
    <router-link to="/about">About</router-link>

    <router-view class="container"/>
  </div>
</template>

<script>
  import * as _ from 'lodash';
  window._ = _
  import msg from '~/app/core/msg'
  window.msg = msg
  import api from '~/app/core/api'
  window.api = api

  import '~/app/styles/base.scss';
  import headful from 'headful';
  
  export default {
    name: 'app',
    metaInfo: {
      title: 'Admin panel', // set a title
      titleTemplate: 'Admin panel - %s',
      htmlAttrs: {
        lang: 'en',
      }
    },
    components: {
    },
    data() {
      return {
      };
    },
    methods: {
    },
    mounted() {
    },
  };
</script>

<style lang="scss">
p {
  padding: 0;
}
</style>
