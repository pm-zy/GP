export default {
	demoMutation (state) {
	},
	changeLogin (state, payload) {
		state.login.status = true;
		state.login.loginInfo = payload;
		console.log('mutation: changeLogin')
	},
	logout (state) {
		state.login.status = false;
		console.log('mutation: logout')
	},
	changeUser (state, payload) {
		state.userInfo = payload;
		state.login.status = true;
		console.log('mutation: changeUser')
	}
}
