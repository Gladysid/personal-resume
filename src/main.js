// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui';
// import {
//   Backtop, Rate, MessageBox, Alert, Message, Form, FormItem,
// } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css';


// Vue.use(ElementUI);
// Vue.use(Backtop);
// Vue.use(Rate);
// Vue.use(MessageBox);


// Vue.prototype.$alert = MessageBox.alert;
Vue.config.productionTip = false


/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

