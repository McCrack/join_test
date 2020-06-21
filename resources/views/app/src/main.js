import "normalize.css";
import "material-design-icons-iconfont";
import "materialize-css";

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import VueAxios from 'vue-axios';
 Vue.use(VueAxios, axios);

import VueLodash from 'vue-lodash';
import lodash from 'lodash';
 Vue.use(VueLodash, {lodash: lodash });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
