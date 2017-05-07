<template>
	<div class="body-full-width">
		<div class="register-body">
			<form class="form">
				<div class="base-info">
					<p>账号信息</p>
					<span class="label">昵称</span>
					<Input v-model="newUser.nickname" placeholder="请输入昵称" ></Input>
					<span class="label">手机号</span>
					<Input v-model="newUser.telNum"  placeholder="请输入手机号" ></Input>
					<span class="label">邮箱</span>
					<Input v-model="newUser.email" type="email" placeholder="请输入邮箱" ></Input>
				</div>
				<div class="stu-info">
					<p>个人信息</p>
					<span class="label">姓名</span>
					<Input v-model="newUser.name" placeholder="请输入姓名" ></Input>
					<span class="label">学号/工号</span>
					<Input v-model="newUser.personId" placeholder="请输入学号或工号" ></Input>
					<span class="label">学校</span>
					<Input v-model="newUser.school" placeholder="请输入学校" ></Input>
					<span class="label">学院</span>
					<Input v-model="newUser.college" placeholder="请输入学院" ></Input>
					<span class="label">专业</span>
					<Input v-model="newUser.major" placeholder="请输入专业" ></Input>
					<span class="label">班级</span>
					<Input v-model="newUser.class" placeholder="请输入行政班级" ></Input>
				</div>
			</form>
		</div>
	</div>

</template>
<script>
export default {
	components: {

	},
	data() {
		return {
			newUser: {
				name: '',
				nickname: '',
				userType: 1,
				personId: '',
				password: '',
				email: '',
				telNum: '',
				school: '西安邮电大学',
				college: '计算机学院',
				major: '计算机科学与技术',
				class: ''
			},
			userType: 0
		};
	},
	methods: {
		setUserType() {
			this.newUser.userType = this.userType;
		},
		register() {
			// ajax
		}
	}
}
</script>
<style lang="less">
.register-body {
	.form {
		width: 800px;
		margin: 20px auto;
		.base-info, .stu-info {
			padding: 20px 80px;
		}
		.base-info > p, .stu-info > p {
			margin-left: -50px;
			font-size: 18px;
		}
		.label {
			color: #333;
			font-size: 16px;
			line-height: 28px;
			font-weight: normal;
		}
	}
}
</style>
