import app from './app/app.vue';
import router from './app/routes';
import Router from 'vue-router'
import 'bootstrap';
import './app/store'
import '~/node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.use(Router)

const components = {
    app,
    // ..._.omit(iView, ['i18n', 'install', 'lang', 'locale', 'version'])
  }
// console.log(components)
window.onload = () => {
  /* eslint-disable */
  new Vue({
    /* eslint-enable */
    el: 'app',
    router,
    components: components,
  });
};

if (module.hot) {
  module.hot.accept();
}
