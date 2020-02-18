import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
import router from "./routes";
import VueRouter from "vue-router";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
});
