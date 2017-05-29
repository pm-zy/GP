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
			<div class="content">
				<div class="task">
					<ul>
						<li v-for="(question, index) of taskDetail">
							<p class="title">{{ index+1 }}、 {{question.content}} (本题目{{question.point}}分)</p>
							<div><span>答案： </span>
								<p v-for="an of question.answer">{{an}}</p>
							</div>
							<div>
								<span>我的回答： </span>
								<p v-for="san of question.stuanswer">{{san}}</p>

							</div>

							<!--<Radio-group v-model="answer[index].answer" v-if="question.type == 1">
									<Radio :label="i.key" v-for="i in question.options" />
								</Radio-group>
		
								<Checkbox-group v-model="answer[index].answer" v-else-if="question.type == 2">
									<Checkbox :label="opt" v-for="opt in question.options" />
								</Checkbox-group>
		
								<Code v-else-if="question.type == 4" :question="question" :codes="answer[index].answer"></Code>
		
								<Input v-model="answer[index].answer" placeholder="请输入答案" type="textarea" style="width: 300px" v-else />-->
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	data() {
		if (!this.$store.getters.getLoginStatus.status) {
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
		this.getTaskDetail();
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
			let retData = [
				{
					"outexam": "",
					"answer": ["选项1"],
					"options": [
						{
							"key": "选项1"
						}, {
							"key": "选项2"
						}, {
							"key": "选项3"
						}, {
							"key": "选项4"
						}
					],
					"quesid": "1",
					"stuanswer": ["选项2"],
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
						"选项1", "选项2"
					],
					"options": ["选项1", "选项2", "选项3", "选项4"],
					"quesid": "2",
					"stuanswer": ["选项1", "选项2"],
					"otheranswer": "我最帅",
					"type": "2",
					"point": "3",
					"content": "1+1等于？",
					"otherstuanswer": "说的对",
					"inputexam": "55,45"
				}, {
					"outexam": "100",
					"answer": [],
					"options": [
						{
							"key": "选项1"
						}, {
							"key": "选项2"
						}, {
							"key": "选项3"
						}, {
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
			background-color: #70C4A4;
			text-align: center;
			h1,
			i.fa {
				color: #fff;
				display: inline-block;
				font-size: 18px;
			}
		}
		section {
			padding-top: 20px;
			.score {
				p {
					font-size: 40px;
					color: #70C4A4;
					text-align: center;
				}
			}
			.user {
				padding-left: 20px;
				border-bottom: 1px #70C4A4 solid;
				p {
					word-wrap: break-word;
				}
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
