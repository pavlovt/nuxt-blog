import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import About from './pages/about.vue'
import Login from './pages/login.vue'

Vue.use(Router)
Vue.component('Login', Login)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
