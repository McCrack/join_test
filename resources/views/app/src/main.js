import "normalize.css";
import "materialize-css";
import "material-design-icons-iconfont";

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';

/** Axios **/
Vue.use(VueAxios, axios);
axios.defaults.baseURL = '/api';

/** Lodash **/
Vue.use(VueLodash, {lodash: lodash });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
