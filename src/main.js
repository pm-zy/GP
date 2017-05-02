import Vue from 'vue'
import VueRouter from 'vue-router'

import iView from 'iview';

import store from './vuex/store'

import 'iview/dist/styles/iview.css';
import './styles/normalize.css'
import './styles/bootstrap.min.css'
import './styles/font-awesome.css'
import './styles/global.css'

import App from './App.vue'
import routes from './configs/router'

Vue.use(VueRouter);
Vue.use(iView);

const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
	el: '#app',
	render: (h) => h(App)
})
