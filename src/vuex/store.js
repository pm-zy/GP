import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import state from './state'
Vue.use(Vuex);

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters: {
		getUserInfo: state => {
			return state.userInfo;
		},
		getLoginStatus: state => {
			return state.login
		},
		getMessage: state => {
			return state.message
		},
		getNewUser1: state => {
			return state.newUser1
		},
		getNewUser2: state => {
			return state.newUser2
		},
		getClasses: state => {
			return state.courseClasses
		}
	}
})
