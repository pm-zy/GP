export default {
	demoMutation(state) {
	},
	logout(state) {
		state.login.status = false;
		// console.log('mutation: logout')
	},
	changeUser(state, payload) {
		state.userInfo = payload.userInfo;
		state.login.status = !payload.loginInfo.status;
		state.login.loginInfo = payload.loginInfo;
		// console.log(state)
	},
	changeMessage(state, payload) {
		state.message = payload
	},
	changeNewUser(state, payload) {
		state.newUser = payload
	}
}
