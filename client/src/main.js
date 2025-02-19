import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import axios from 'axios';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  iconfont: 'md'
});

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
