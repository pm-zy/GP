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
				<div class="info">
					<h4 class="tips">编程题请同学们记得提交代码</h4>
				</div>
			</section>
		</div>
		<div class="right">
			<div class="content">
				<div class="task">
					<ul >
						<li v-for="(question, index) of taskDetail">
							<p class="title">{{ index+1 }}、 {{ question.content }} (本题目{{question.point}}分)</p>
							<Radio-group v-model="answer[index].answer" v-if="question.type == 1">
								<Radio :label="i.key" v-for="i in question.options" />
							</Radio-group>

							<Checkbox-group v-model="answer[index].answer" v-else-if="question.type == 2">
								<Checkbox :label="opt" v-for="opt in question.options" />
							</Checkbox-group>

							<Code v-else-if="question.type == 4" :question="question" :codes="answer[index].answer"></Code>

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
import Code from '../components/code'
let timeInterval;
export default {
	components: {
		Code
	},
	props: ['reload'],
	data() {
		console.log("reload::::::" + this.reload);
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
		this.getTaskInfo();
		this.getTaskDetail();
		this.timer = {
			min: 0,
			s: 0
		}
		if(this.task.type == 0 && this.task.TaskTime > 0) {
			let timeCount = this.task.TaskTime * 60;
			timeInterval = setInterval(() => {
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
				TaskTime: 100,
				type: 0
			}
		},
		getTaskDetail() {
			// let retData = {
			// 	"code": "0",
			// 	"tasks": [{
			// 		"taskid": "111",
			// 		"status": "0"
			// 	}],
			// 	"info": "成功"
			// };
			let retData = [
			{
				"outexam": "",
				"answer": [],
				"options": [
					{
						"key": "选项1"
					}, {
						"key": "选项2"
					},{
						"key": "选项3"
					},{
						"key": "选项4"
					}
				],
				"quesid": "1",
				"stuanswer": [],
				"otheranswer": "",
				"type": "1",
				"point": "3",
				"content": "1+1等于？",
				"otherstuanswer": "",
				"inputexam": ""
			},
			{
				"outexam": "100",
				"answer": [ 
					{
						"key": "2"
					}
				],
				"options": [ "选项1",  "选项2",  "选项3",  "选项4"],
				"quesid": "2",
				"stuanswer": [],
				"otheranswer": "我最帅",
				"type": "2",
				"point": "3",
				"content": "1+1等于？",
				"otherstuanswer": "说的对",
				"inputexam": "55,45"
			}, {
				"outexam": "100",
				"answer": [
					{
						"key": "2"
					}
				],
				"options": [
					{
						"key": "选项1"
					}, {
						"key": "选项2"
					},{
						"key": "选项3"
					},{
						"key": "选项4"
					}
				],
				"quesid": "2",
				"stuanswer": [],
				"otheranswer": "",
				"type": "4",
				"point": "3",
				"content": "1+1等于？",
				"otherstuanswer": "说的对",
				"inputexam": "55,45"
			}];
			this.taskDetail = retData;
			
			this.taskDetail.forEach(item => {
				this.answer.push({
					id: item.quesid,
					answer: null
				})
			})
		},
		clickSubmit() {
			if(confirm('确认提交？')) {
				this.submit();
			}
		},
		submit() {
			// ajax
			console.log('fsdrs');
			console.log(this.answer);
			clearInterval(timeInterval);
			alert('提交成功');
			// this.$router.go(-1)
		}
	},
	watch: {
		'reload': function () {

		}
	}
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
			padding: 20px 5px 20px 5px;
			.task-name {
				text-align: center;
				font-size: 18px;
				color: #F56E6E;
			}
			.info {
				.tips {
					color: #d9534f;
					font-weight: bold;
				}
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
