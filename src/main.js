import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './configs/router'

import './styles/normalize.css'
import './styles/bootstrap.css'
import './styles/font-awesome.css'
import './styles/global.css'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})