<template>
	<div class="body-full-width">
		<div class="login-content">
			<div class="login-logo">
				<img src="/static/assets/logo.png" alt="">
			</div>
			<form class="login-form form">
				<input type="text" class="form-control" name="" placeholder="用户名" v-model="userName" />
				<input type="password" class="form-control" name="" placeholder="密码" v-model="password" />
				<a href="#" class="role-a">教师登陆</a><br />
				<button class="btn btn-primary" name="button" @click="login">学生登陆</button>
				<a href="/#/register" class="a-btn btn btn-success" name="button" >注册</a>
			</form>
		</div>
	</div>

</template>
<script>
import { login } from '../vuex/actions'
import store from '../vuex/store'
	export default {
		data() {
			console.log(this.$state)
			if(store.getters.userInfo.email) {
				alert('已登录');
				this.$router.replace('/');
			}
			return {
				userName: store.getters.getUserInfo.nickname,
				password: ''
			}
		},
		methods: {
			login: function() {
				// 获取数据
				let userData = {
					nickname: 'PM' + new Date().getTime(),
			        email: 'i@varpm.com',
			        telNum: '18829295436',
			        personId: new Date().getTime(),
			        org: '西安邮电大学 计算机学院 计科1303',
			        userType: 1
				};
				let  userPic = `/static/assets/${userData.personId % 21}.jpg`;
				userData.userPic = userPic;
				let fakeLoginInfo = {
		            status: 0,
		            userToken: '770fed4ca2aabd20ae9a5dd774711de2',
		            info: '登陆成功'
		        }
				store.commit('changeUser', {userInfo: userData, loginInfo: fakeLoginInfo});
				this.$router.replace('/')
			},
		},
	}
</script>
<style lang="less">
.role-a{
	float: right;
	margin-right: 40px;
	text-decoration: none;
}
.login-content {
	width: 400px;
	margin: 10% auto;
	text-align: center;
	.login-form {
		overflow: hidden;
		input {
			width: 320px;
			font-size: 16px;
			height: 40px;
			margin: 10px auto;
		}
		button {
			width: 320px;
			height: 40px;
			line-height: 26px;
			font-size: 18px;
			margin: 5px 10px;
		}
		.a-btn {
			font-size: 18px;
    		width: 320px;
		}
	}
}
</style>
