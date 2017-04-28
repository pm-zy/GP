export default {
	demoMutation (state) {
	},
	logout (state) {
		state.login.status = false;
		console.log('mutation: logout')
	},
	changeUser (state, payload) {
		console.log(payload)
		// console.log(payload)
		state.userInfo = payload.userInfo;
		state.login.status = !payload.loginInfo.status;
		state.login.loginInfo = payload.loginInfo;
		console.log(state)
	}
}
