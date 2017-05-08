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
					<p>{{timer.min}} : {{timer.s}}</p>
				</div>
				<div class="user">
					<p>{{user.nickname}}</p>
				</div>
			</section>
		</div>
		<div class="right">
			<div class="content">
				<div class="task">
					<ul >
						<li v-for="(question, index) of taskDetail">
							<p class="title">{{ index+1 }}、 {{question.title}} (本题目{{question.score}}分)</p>
							<Radio-group v-model="answer[index].answer" v-if="question.type === 1">
								<Radio :label="i" v-for="i in question.item" />
							</Radio-group>

							<Checkbox-group v-model="answer[index].answer" v-else-if="question.type === 2">
								<Checkbox :label="i" v-for="i in question.item" />
							</Checkbox-group>
							<Input v-model="answer[index].answer" placeholder="请输入答案" type="textarea" style="width: 300px" v-else />
						</li>
					</ul>
					<Button type="primary" @click="clickSubmit">提交答案</Button>
				</div>
			</div>
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
			taskDetail: [],
			answer: [],
			timer: {
				min: 0,
				s: 0
			}
		}
	},
	created() {
		console.log(window.location);
		this.getTaskInfo();
		this.getTaskDetail();
		if(this.task.type == 0 && this.task.TaskTime > 0) {
			let timeCount = this.task.TaskTime * 60;
			let timeInterval = setInterval(() => {
				this.formatTimer(timeCount);
				timeCount = timeCount - 1;
				if(timeCount === -1) {
					clearInterval(timeInterval)
					this.submit();
				}
			}, 1000);
		}
	},
	methods: {
		formatTimer(timer) {
			this.timer.min = Math.floor(timer / 60);
			this.timer.s = timer % 60;
		},
		getTaskInfo() {
			this.task = {
				CourseID: "数据结构啊",
				Task: "",
				UserID: "04131111",
				TaskID: 1,
				TaskScore: "",
				TaskName: "计科1301班摸底考试",
				TaskDescribe: "1111",
				TaskTime: 0.1,
				type: 0
			}
		},
		getTaskDetail() {
			this.taskDetail = [
				{
					id: 1,
					type: 1, // 单选
					title: '如何使用multipart/form-data格式上传文件？',
					item: ['选项1', '选项2', '选项3', '选项4'],
					score: 5
				}, {
					id: 2,
					type: 2, // 多选
					title: '如何使用xxxx格式xxxx?',
					item: ['选项1', '选项2', '选项3', '选项4'],
					score: 5
				}, {
					id: 3,
					type: 3, // 填空
					title: '_____使用xxxx格式xxxx?',
					score: 5
				}
			];
			this.taskDetail.forEach(item => {
				this.answer.push({
					id: item.id,
					answer: null
				})
			})
		},
		clickSubmit() {
			if(confirm('确认提交？')) {
				submit();
			}
		},
		submit() {
			// ajax
			console.log(this.answer);
			alert('提交成功');
			this.$router.go(-1)
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
		border-right: 1px #F56E6E solid;
		header {
			height: 70px;
			line-height: 70px;
			background-color: #F56E6E;
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
				color: #F56E6E;
			}
		}

	}
	.right {
		width: 100%;
		height: 100%;
		.content {
			margin-left: 150px;
			padding-left: 20px;
			height: 100%;
			overflow: auto;
		}
		.task {
			margin: 20px 50px 20px 20px;
			max-width: 1200px;
			min-width: 500px;
			li {
				margin: 5px 0;
				.title {
					font-size: 16px;
				}
				.title + div {
					margin-left: 20px;
				}
			}
			button {
				margin-left: 500px;
				margin-top: 30px;
			}
		}
	}
}
</style>
