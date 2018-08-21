<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  /*import * as jq from 'jquery';
  window.$ = jq
  import 'webpack-jquery-ui';
  import 'webpack-jquery-ui/css';*/
  import * as _ from 'lodash';
  window._ = _
  import conf from './core/conf'
  window.conf = conf
  window.apis = conf.server.apis
  import core from './core/core'
  window.core = core
  
  // import msg from './core/msg'
  // window.msg = msg
  // import api from './core/api'
  // window.api = api
  // import alertify from 'alertifyjs'
  // window.alertify = alertify
  // import 'font-awesome/css/font-awesome.min.css'

  import './core/validators'

  // init html head
  import head from './core/head'
  head.init(conf.head)

  export default {
    name: 'app',
    data: () => ({

    }),
    components: {
      
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
