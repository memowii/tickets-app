// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueSnackbar from 'vue-snack';
import './assets/css/styles.scss';
import 'vue-snack/dist/vue-snack.min.css'

Vue.config.productionTip = false;

Vue.use(VueSnackbar, {
  position: 'bottom',
  time: 20000,
});

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
