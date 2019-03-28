import Vue from 'vue'
import App from './App.vue'
import router from './router'

import artm from '../src/index'

import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(artm)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
