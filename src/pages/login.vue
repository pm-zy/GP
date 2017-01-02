<template>
	<div class="body-full-width">
		<div class="login-content">
			<div class="login-logo">
				<img src="../assets/logo.png" alt="">
			</div>
			<form class="login-form form">
				<input type="text" class="form-control" name="" placeholder="用户名" />
				<input type="password" class="form-control" name="" placeholder="密码" />
				<a href="#" class="role-a">教师登陆</a><br />
				<button class="btn btn-primary" name="button">学生登陆</button>
				<button class="btn btn-success" name="button">注册</button>
			</form>
		</div>
	</div>

</template>
<script>
	export default {
		components: {

		}
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
		}
	}
</style>
