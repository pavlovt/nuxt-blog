import app from './app/app.vue';
import router from './app/routes';
import Router from 'vue-router'
import Meta from 'vue-meta';
import bs from 'bootstrap';
import '~/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import _ from 'lodash';

Vue.use(Router);
Vue.use(Meta);
// Vue.use(iView);

// register iView components
// Vue.component()
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
