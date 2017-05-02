<template>
	<div class="detail-page undone">
		<div class="left">
			<header>
				<i class="fa fa-circle-o-notch "></i>
				<h1>任务进行中</h1>
			</header>
			<section>
				<div class="task-name">
					<p>{{task.TaskName}}</p>
				</div>
				<div class="user">
					<p>{{user.nickname}}</p>
				</div>
			</section>
		</div>
		<div class="right">
			fwer fnjwen
		</div>
	</div>

</template>
<script>
export default {
	data() {
		if(!this.$store.getters.getLoginStatus.status) {
			alert('请先登录');
			this.$router.replace('/login');
		}
		return {
			user: this.$store.getters.getUserInfo,
			task: {},
			taskDetail: {}
		}
	},
	created() {
		console.log(window.location);
		this.getTaskInfo();
	},
	methods: {
		getTaskInfo() {
			this.task = {
				CourseID: "数据结构啊",
				Task: "",
				UserID: "04131111",
				TaskID: 1,
				TaskScore: "",
				TaskName: "计科1301班摸底考试",
				TaskDescribe: "1111"
			}
		},
		getTaskDetail() {

		}
	},
}
</script>
<style lang="less">
.detail-page {
	position: fixed;
	background-color: #fff;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
}
.detail-page.undone {
	.left {
		width: 150px;
		float: left;
		height: 100%;
		border-right: 1px #3399ff solid;
		header {
			height: 70px;
			line-height: 70px;
			background-color: #3399ff;
			text-align: center;
			h1, i.fa {
				color: #fff;
				display: inline-block;
				font-size:18px;
			}
		}
		section {
			padding-top: 20px;
			padding-left: 20px;
			.task-name {
				text-align: center;
				font-size: 18px;
				color: #3399ff;
			}
		}

	}
	.right {
		width: 100%;
		height: 100%;
		margin-left: 150px;
		padding-left: 20px;
	}
}
</style>
