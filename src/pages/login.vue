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
				<form class="login-form form">
					<div class="username input-div">
						<Icon type="person"></Icon>
						<input type="text" name="" placeholder="用户ID" v-model="userid" />
					</div>
					<div class="password input-div">
						<Icon type="android-lock"></Icon>
						<input type="password" name="" placeholder="密码" v-model="password" @keyup.enter="login" />
					</div>
					<div class="tips">
						<span class="info">{{info}}</span>
						<a href="" class="role-a">教师登陆</a>
						<br />
					</div>
					<div class="btn btn-login" name="button" @click="login">学生登陆</div>
					<a href="/#/register" class="a-btn btn " name="button">注册</a>
				</form>
				<div class="bottom-img">
					<img src="/static/assets/bottom.png" alt="">
				</div>
			</div>
		</div>
	
	</div>
</template>
<script>
import { login } from '../vuex/actions'
import axios from 'axios'
import store from '../vuex/store'
export default {
	data() {
		if (store.getters.getLoginStatus.status) {
			alert('已登录');
			this.$router.replace('/index');
		}
		return {
			info: '',
			userName: '',
			userid: '',
			password: '',

		}
	},
	watch: {
		'password': function () {
			this.info = "";
		}
	},
	methods: {
		login: function () {
			if (!this.userid || !this.password) {
				this.info = '请输入用户名和密码'
				return;
			}
			// 获取数据

			let postData = {
				userid: this.userid,
				password: this.password
			}
			let url = "http://" + window.location.hostname + ':8800' + '/api/ThinkPHP.php?m=Home&c=personnal&a=login'
			this.info = "";
			axios({
				url: url,
				method: 'post',
				data: postData,
				transformRequest: [function (data) {
					let ret = ''
					for (let it in data) {
						ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					return ret
				}],
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).then(res => {
				console.log("res::::")
				console.log(res)
				if (res.status == 200) {
					let retData = res.data;
					let pic = `/static/assets/${this.userid % 21}.jpg`
					if (retData.status == 0) {
						let userData = {
							class: retData.class,
							college: retData.college,
							major: retData.major,
							name: retData.name,
							nick: retData.nick,
							school: retData.school,
							userPic: pic,
							userid: this.userid
						};
						store.commit('changeUser', { userInfo: userData, loginInfo: { status: 0 } })
						this.$router.replace('/index')

					} else {
						this.info = retData.info
					}
				} else {
					this.info = "错误代码：" + res.status
				}
			})
		},
	},
}
</script>
<style lang="less">
.body-full-width {
	.login-wrap {
		background-color: #71B6B5;
		width: 100vw;
		height: 100vh;
		position: fixed;
		.circle {
			background-color: #88cac9;
			position: absolute;
			width: 5500px;
			height: 2500px;
			top: -1400px;
			left: 0px;
			border-radius: 50%;
			z-index: -1;
		}
	}
	.tips {
		overflow: hidden;
		text-align: left;
		padding-left: 80px;
		.role-a {
			float: right; // margin-left: 300px;
			margin-right: 100px;
			margin-top: 10px;
			text-decoration: none;
			display: inline-block;
		}
		.info {
			display: inline-block;
			margin-top: 10px; // line-height: 20px;
			color: red;
		}
	}

	.login-content {
		width: 900px;
		height: 500px; // margin: 10% auto;
		text-align: center;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		margin: 0 auto;
		background-color: #fff;
		.top-img {
			position: absolute;
			top: -30px;
		}
		.bottom-img {
			position: absolute;
			bottom: -30px;
			right: 0;
		}
		.left-img {
			float: left;
			margin: 0 20px 0 40px;
			position: relative;
			top: 50%;
			transform: translateY(-50%);
		}
		.login-form {
			overflow: hidden;
			position: relative;
			top: 50%;
			transform: translateY(-50%);

			.input-div {
				font-size: 18px;
				color: #999;
				border-bottom: 1px #ccc solid;
				width: 350px;
				margin-left: 100px;
				.ivu-icon {
					line-height: 45px;
					font-size: 20px;
					display: inline-block;
					margin-right: 10px;
				}
			}
			input {
				width: 320px;
				font-size: 16px;
				height: 40px;
				margin: 10px auto;
				box-shadow: none;
				border: none;
				&:focus {
					outline: none;
				} // border-bottom: 1px #ccc solid;
			}
			.btn {
				width: 150px;
				height: 40px;
				line-height: 26px;
				font-size: 18px;
				margin: 5px 10px;
				border-radius: 15px;
				margin: 10px 20px 0 20px;
			}
			.btn-login {
				background-color: #88cac9;
				color: #fff;
			}
			.a-btn {
				font-size: 18px;
				width: 150px;
				border: 1px #88cac9 solid;
				color: #71B6B5;
			}
		}
	}
}
</style>
