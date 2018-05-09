import Vue from "vue";
import VeeValidate from 'vee-validate';
import app from './app/app.vue';
import router from './app/routes';
import Router from 'vue-router'
import 'bootstrap';
import './app/store/index.store'
import '~/node_modules/bootstrap/dist/css/bootstrap.min.css';

// import VeeValidate from 'vee-validate'
// window.VeeValidate = VeeValidate


/*import VeeValidate from 'vee-validate';
window.VeeValidate = VeeValidate
console.log(VeeValidate)
window.Vue.use(window.VeeValidate)*/
// Vue.use(VeeValidate)
// Vue.directive('validate', VeeValidate.directive)
// Vue.mixin(VeeValidate.mixin)

const components = {
    app,
    // ..._.omit(iView, ['i18n', 'install', 'lang', 'locale', 'version'])
  }
// console.log(components)
window.onload = () => {
  Vue.use(VeeValidate)
  Vue.use(Router)
  /* eslint-disable */
  new Vue({
    /* eslint-enable */
    el: 'app',
    router,
    components: components,
    render: h => h(app),
  });
};

if (module.hot) {
  module.hot.accept();
}
