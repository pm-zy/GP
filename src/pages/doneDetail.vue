<template>
	<div class="detail-page done">
		<div class="left">
			<header>
				<i class="fa fa-check"></i>
				<h1>已完成</h1>
			</header>
			<section>
				<div class="score">
					<p>{{task.TaskScore}}</p>
				</div>
				<div class="user">
					<p>{{user.nickname}}</p>
				</div>
			</section>
		</div>
		<div class="right">
			fwer fnjwen
			<Radio-group v-model="phone">
        <Radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </Radio-group>
    <Radio-group v-model="animal">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </Radio-group>
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
			taskDetail: {},
			phone: '',
		                  animal: ''
		}
	},
	created() {
		this.getTaskInfo();
	},
	methods: {
		getTaskInfo() {
			this.task = {
				CourseID: "数据结构",
				Task: "练习",
				UserID: "04131111",
				TaskID: 3,
				TaskScore: "76",
				TaskName: "计科1301班摸底考试已完成",
				TaskDescribe: "已完成的考试"
			}
		},
		getTaskDetail() {

		}
	},
}
</script>
<style lang="less">
.detail-page.done {
	.left {
		width: 150px;
		float: left;
		height: 100%;
		border-right: 1px #00cc66 solid;
		header {
			height: 70px;
			line-height: 70px;
			background-color: #00cc66;
			text-align: center;
			h1, i.fa {
				color: #fff;
				display: inline-block;
				font-size:18px;
			}
		}
		section {
			padding-top: 20px;
			.score {
				p {
					font-size: 40px;
					color: #00cc66;
					text-align: center;
				}
			}
			.user {
				padding-left: 20px;
				border-bottom: 1px #00cc66 solid;
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
