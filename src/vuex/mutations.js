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
		state.newUser1 = payload
	},
	changeNewUser2(state, payload) {
		state.newUser2 = payload
	},
	addClass(state, payload) {
		state.courseClasses.push(payload)
	},
	reload(state) {
		state.reload = !state.reload;
	},
	setClasses(state, payload) {
		state.courseClasses = payload
	}
}
