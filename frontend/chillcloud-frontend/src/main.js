
import router from './router'
import Vue from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
