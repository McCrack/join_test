import "normalize.css";
import 'materialize-css/dist/css/materialize.min.css';
import "material-design-icons-iconfont";
import './assets/index.css';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import VTooltip from 'v-tooltip'

/** Axios **/
Vue.use(VueAxios, axios);
axios.defaults.baseURL = '/api';
/** Lodash **/
Vue.use(VueLodash, {lodash: lodash });
/** Tooltip **/
Vue.use(VTooltip)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
