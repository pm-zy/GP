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
							<p class="title">{{ index+1 }}、 {{ question.name }} (本题目{{question.point}}分)</p>
							<div>
								<span>答案： </span>
								<p v-for="an of question.answer">{{an}}</p>
							</div>
							<div>
								<span>我的回答： </span>
								<p v-for="san of question.stuanswer">{{san}} </p>
	
							</div>
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
		// this.getTaskInfo();
		this.getTaskDetail();
	},
	methods: {

		getTaskDetail() {
			let userid = this.$store.getters.getUserInfo.userid;
			let taskid = this.$router.history.current.params.id;
			console.log(this.$router.history.current.params)
			let courclassid = this.$router.history.current.params.class;
			let url = urlConfig.APIRoot + '?m=home&c=task&a=taskdetail'

			axios({
				url: url,
				method: 'post',
				data: { userid: userid, taskid: taskid, courclassid: courclassid },
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
				console.log(res);
				if (res.status == 200) {
					if (res.data.code === 0) {
						if (res.data.task.length) {
							this.task = res.data.task[0];
							this.task.questions.forEach(que => {
								if(que.content) {
									try {
										que.options = JSON.parse(que.content);
										console.log(que.options)
									} catch (error) {
										
									}
								}
							})
							this.taskDetail = this.task.questions;
							this.taskDetail.forEach(item => {
								this.answer.push({
									quesid: item.quesid,
									stuanswer: null
								})
							})
						}
					}
				}
			}) 
		},
	// 	getTaskDetail() {
	// 		let retData = [
	// 			{
	// 				"outexam": "",
	// 				"answer": ["选项1"],
	// 				"options": [
	// 					{
	// 						"key": "选项1"
	// 					}, {
	// 						"key": "选项2"
	// 					}, {
	// 						"key": "选项3"
	// 					}, {
	// 						"key": "选项4"
	// 					}
	// 				],
	// 				"quesid": "1",
	// 				"stuanswer": ["选项2"],
	// 				"otheranswer": "",
	// 				"type": "1",
	// 				"point": "3",
	// 				"content": "1+1等于？",
	// 				"otherstuanswer": "",
	// 				"inputexam": ""
	// 			},
	// 			{
	// 				"outexam": "100",
	// 				"answer": [
	// 					"选项1", "选项2"
	// 				],
	// 				"options": ["选项1", "选项2", "选项3", "选项4"],
	// 				"quesid": "2",
	// 				"stuanswer": ["选项1", "选项2"],
	// 				"otheranswer": "我最帅",
	// 				"type": "2",
	// 				"point": "3",
	// 				"content": "1+1等于？",
	// 				"otherstuanswer": "说的对",
	// 				"inputexam": "55,45"
	// 			}, {
	// 				"outexam": "100",
	// 				"answer": [],
	// 				"options": [
	// 					{
	// 						"key": "选项1"
	// 					}, {
	// 						"key": "选项2"
	// 					}, {
	// 						"key": "选项3"
	// 					}, {
	// 						"key": "选项4"
	// 					}
	// 				],
	// 				"quesid": "2",
	// 				"stuanswer": [],
	// 				"otheranswer": "",
	// 				"type": "4",
	// 				"point": "3",
	// 				"content": "1+1等于？",
	// 				"otherstuanswer": "说的对",
	// 				"inputexam": "55,45"
	// 			}];
	// 		this.taskDetail = retData;
	// 	}
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
