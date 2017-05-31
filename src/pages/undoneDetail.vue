<template>
	<div class="detail-page undone">
		<div class="left">
			<header>
				<i class="fa fa-circle-o-notch "></i>
				<h1>任务进行中</h1>
			</header>
			<section>
				<div class="task-name">
					<p>{{task.classtaskname}}</p>
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
					<ul>
						<li v-for="(question, index) of taskDetail">
							<p class="title">{{ index+1 }}、 {{ question.name }} (本题目{{question.point}}分)</p>
							<Radio-group v-model="answer[index].stuanswer" v-if="question.type == 1">
								<Radio :label="i.key" v-for="i in question.options" />
							</Radio-group>
							<Radio-group v-model="answer[index].stuanswer" v-else-if="question.type == 3">
								<Radio :label="String(true)" />
								<Radio :label="String(false)" />
							</Radio-group>
	
							<Checkbox-group v-model="answer[index].stuanswer" v-else-if="question.type == 2">
								<Checkbox :label="opt" v-for="opt in question.options" />
							</Checkbox-group>
	
							<Code v-else-if="question.type == 4" :question="question" :codes="answer[index].stuanswer"></Code>
	
							<Input v-model="answer[index].stuanswer" placeholder="请输入答案" type="textarea" style="width: 300px" v-else />
						</li>
					</ul>
					<Button type="primary" @click="clickSubmit">提交答案</Button>
				</div>
				<div :class="loading">
					<Button type="primary" loading>正在提交...</Button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Code from '../components/code'
import store from '../vuex/store'
import urlConfig from '../configs/urlConfig'
import axios from 'axios'
let timeInterval;
export default {
	components: {
		Code
	},
	props: ['reload'],
	data() {
		console.log("reload::::::" + this.reload);
		if (!this.$store.getters.getLoginStatus.status) {
			alert('请先登录');
			this.$router.replace('/login');
		}
		return {
			user: this.$store.getters.getUserInfo,
			task: {},
			taskDetail: [],
			answer: [],
			loading: 'loaded',
			timer: {
				min: 0,
				s: 0
			}
		}
	},
	created() {
		this.getTaskDetail();
		this.timer = {
			min: 0,
			s: 0
		}
		// this.task.TaskTime = 90;
		// if (this.task.type == 0 && this.task.TaskTime > 0) {
		// 	let timeCount = this.task.TaskTime * 60;
		// 	timeInterval = setInterval(() => {
		// 		this.formatTimer(timeCount);
		// 		timeCount = timeCount - 1;
		// 		if (timeCount === -1) {
		// 			clearInterval(timeInterval)
		// 			this.submit();
		// 		}
		// 	}, 1000);
		// }
		let timeCount = 5400;
		timeInterval = setInterval(() => {
			this.formatTimer(timeCount);
			timeCount = timeCount - 1;
			if (timeCount === -1) {
				clearInterval(timeInterval)
				// this.submit();
			}
		}, 1000);
		let timeOut = setTimeout(function () {
			clearInterval(timeInterval)
			this.submit();
		}, 5400000);
	},
	methods: {
		formatTimer(timer) {
			this.timer.min = Math.floor(timer / 60);
			this.timer.s = timer % 60;
		},
		getTaskDetail() {
			let userid = store.getters.getUserInfo.userid;
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
								if (que.content) {
									try {
										que.options = JSON.parse(que.content);
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
			// let retData = {
			// 	"code": "0",
			// 	"tasks": [{
			// 		"taskid": "111",
			// 		"status": "0"
			// 	}],
			// 	"info": "成功"
			// };
			// let retData = [
			// {
			// 	"outexam": "",
			// 	"answer": [],
			// 	"options": [
			// 		{
			// 			"key": "选项1"
			// 		}, {
			// 			"key": "选项2"
			// 		},{
			// 			"key": "选项3"
			// 		},{
			// 			"key": "选项4"
			// 		}
			// 	],
			// 	"quesid": "1",
			// 	"stuanswer": [],
			// 	"otheranswer": "",
			// 	"type": "1",
			// 	"point": "3",
			// 	"content": "1+1等于？",
			// 	"otherstuanswer": "",
			// 	"inputexam": ""
			// },
			// {
			// 	"outexam": "100",
			// 	"answer": "2"
			// ,
			// 	
			// 	"options": [ "选项1",  "选项2",  "选项3",  "选项4"],
			// 	"quesid": "2",
			// 	"stuanswer": [],
			// 	"otheranswer": "我最帅",
			// 	"type": "2",
			// 	"point": "3",
			// 	"content": "1+1等于？",
			// 	"otherstuanswer": "说的对",
			// 	"inputexam": "55,45"
			// }, {
			// 	"outexam": "100",
			// 	"answer": [
			// 		{
			// 			"key": "2"
			// 		}
			// 	],
			// 	"options": [
			// 		{
			// 			"key": "选项1"
			// 		}, {
			// 			"key": "选项2"
			// 		},{
			// 			"key": "选项3"
			// 		},{
			// 			"key": "选项4"
			// 		}
			// 	],
			// 	"quesid": "2",
			// 	"stuanswer": [],
			// 	"otheranswer": "",
			// 	"type": "4",
			// 	"point": "3",
			// 	"content": "1+1等于？",
			// 	"otherstuanswer": "说的对",
			// 	"inputexam": "55,45"
			// }];
			// this.taskDetail = retData;

			// this.taskDetail.forEach(item => {
			// 	this.answer.push({
			// 		id: item.quesid,
			// 		answer: null
			// 	})
			// })
		},
		clickSubmit() {
			if (confirm('确认提交？')) {
				this.submit();
			}
		},
		submit() {
			// ajax
			this.loading = 'loading';
			clearInterval(timeInterval);
			let userid = store.getters.getUserInfo.userid;
			let taskid = this.$router.history.current.params.id;
			let courclassid = this.$router.history.current.params.class;
			let url = urlConfig.APIRoot + '?m=home&c=exam&a=commit';
			let postData = {
				userid: userid,
				taskid: taskid,
				courclassid: courclassid,
				taskques: this.answer
			}
			let ss = JSON.stringify(postData);
			axios({
				url: url,
				method: 'post',
				data: { temp: ss },
				transformRequest: [function (data) {
					let ret = ''
					for (let it in data) {
						ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					// let ret = JSON.stringify(data)
					return ret
				}],
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).then(res => {
				this.loading = "loaded";
				console.log(res);
			})
			alert('提交成功');
			this.$router.replace('/task')
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
			h1,
			i.fa {
				color: #fff;
				display: inline-block;
				font-size: 18px;
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
				.title+div {
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
