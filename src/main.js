import Vue from 'vue'
import './assets/css/reset.css'
Vue.config.productionTip = false
import App from './App'
import router from './router'



const vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

