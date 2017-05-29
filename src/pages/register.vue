<template>
	<div class="body-full-width">
		<div class="login-wrap">
			<div class="circle"></div>
			<div class="login-content">
				<div class="top-img">
					<img src="/static/assets/top.png" alt="">
				</div>
				<div class="left-img">
					<img src="/static/assets/left-img.jpg" alt="">
				</div>
				<div class="register-nav">
					<router-link to="firstStep" class="nav-1">
						<div >1</div>
					</router-link>
					<router-link to="secondStep" class="nav-2">
						<div >2</div>
					</router-link>
					<a href="javascript: void;" class="nav-3"><div><i class="fa fa-check"></i></div></a>
					<div class="line"></div>
					<div class="mask"></div>
				</div>
				<router-view></router-view>
				<div class="bottom-img">
					<img src="/static/assets/bottom.png" alt="">
				</div>
			</div>
		</div>


	</div>

</template>
<script>
import axios from 'axios'
import store from '../vuex/store'
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

		},

	}
}
</script>
<style lang="less">
.register-nav {
	top: -330px;
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
		border: 1px #71B6B5 solid;
		display: inline-block;
		text-align: center;
		line-height: 30px;
		color: #71B6B5;
		background-color: #fff;
	}
	.router-link-active div {
		background-color: #71B6B5;
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
		background-color: #71B6B5;
		height: 1px;
		width: 100%;

		top: 85px;
		z-index: -2;
	}
}
</style>
