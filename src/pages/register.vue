<template>
	<div class="body-full-width">
		<div class="register-nav">
			<router-link to="firstStep" class="nav-1">
				<div >1</div>
			</router-link>
			<router-link to="secondStep" class="nav-2">
				<div >2</div>
			</router-link>
			<a href="javascript: void;" class="nav-3"><div>√</div></a>
			<div class="line"></div>
			<div class="mask"></div>
		</div>
		<router-view></router-view>
	</div>

</template>
<script>
export default {
	components: {

	},
	data() {
		return {

			
		};
	},
	methods: {
		setUserType() {
			this.newUser.userType = this.userType;
		},
		register() {
			// ajax
		},

	}
}
</script>
<style lang="less">
.register-nav {
	margin-top: 50px;
	height: 100px;
	width: 80%;
	margin: 0 auto;
	position: relative;
	display: flex;
	justify-content: space-around;

	.nav-1, .nav-2, .nav-3 {
		// width: 30%;
	}
	a {
		// display: inline-block;
		margin-top: 70px;
	}
	a div {
		width: 30px;
		height: 30px;
		border-radius: 30px;
		border: 1px #abcdef solid;
		display: inline-block;
		text-align: center;
		line-height: 30px;
		color: #abcdef;
		background-color: #fff;
	}
	.router-link-active div {
		background-color: #abcdef;
		color: #fff;
	}
	.mask {
		width: 100%;
		height: 100px;
		position: absolute;
		top: 0;
	}
	.line {
		position: absolute;
		background-color: #abcdef;
		height: 1px;
		width: 100%;

		top: 85px;
		z-index: -2;
	}
}
</style>
