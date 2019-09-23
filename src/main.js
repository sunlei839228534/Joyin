import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/in-Style/index.less';
import api from '@/api/apiList';
import { resetAmount } from '@/tool';

Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.$API = api;
Vue.prototype.$resetAmount = resetAmount;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
