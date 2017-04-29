import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './vuex/store'

import './styles/normalize.css'
import './styles/bootstrap.css'
import './styles/font-awesome.css'
import './styles/global.css'

import App from './App.vue'
import routes from './configs/router'

Vue.use(VueRouter);

const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
	el: '#app',
	render: (h) => h(App)
})
