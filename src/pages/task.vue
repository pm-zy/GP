<template>
	<div class="body of-hd">
		<TopBar path='任务'></TopBar>
		<div class="left-menu of-hd">
			<div class="left-menu-header">
				<span>我的班级</span>
			</div>
			<div class="left-menu-content">
				<input type="radio" name="doneType" v-model="doneType" value="undone" id="radio-join" />
				<label for="radio-join">
					<i class="fa fa-circle-o-notch fa-lg fa-fw"></i>
					<span>未完成</span>
				</label>
				<input type="radio" name="doneType" v-model="doneType" value="done" id="radio-create" />
				<label for="radio-create">
					<i class="fa fa-check-square-o fa-lg fa-fw"></i>
					<span>已完成</span>
				</label>
			</div>
		</div>
		<taskList :task-info="taskInfo"></taskList>
	</div>
</template>
<script>
import TopBar from '../components/topBar'
import taskList from '../components/taskList'
// import VerticalNav from '../components/verticalNav'
import axios from 'axios'
import store from '../vuex/store'

export default {
	components: {
		TopBar,
		// VerticalNav,
		taskList
	},
	data() {
		if (!store.getters.getLoginStatus.status) {
			alert('请先登录');
			console.log(store.getters.getLoginStatus.status);
			this.$router.replace('/login');
		}
		return {
			doneType: 'undone',
			taskInfo: [],
			userId: store.getters.getUserInfo.userid,
			classes: store.getters.getClasses
		}
	},
	created() {
		// axios.post('/m=Home&c=task&a=apptask', {
		// 	userid: this.userId,
		// 	courclass: this.classes,
		// 	type: 1
		// }).then(res => {
		// 	let list = res.courclass;
		// 	for(var cls of list) {
		// 		this.taskInfo.push(cls.tasks)
		// 	}
		// })
		this.taskInfo = [{
			CourseID: "数据结构",
			task: "",
			UserID: "04131111",
			taskid: 1,
			taskscore: "76",
			taskname: "计科1301班摸底考试",
			taskdescribe: "1111"
		}, {
			CourseID: "数据结构2",
			task: "",
			UserID: "04131111",
			taskiD: 2,
			taskscore: "76",
			taskname: "计科1301班摸底考试",
			taskdescribe: "1111"
		}];
		this.taskInfo.forEach(task => {
			task.url = `/undone/${task.taskID}`
		})
	},
	methods: {
		gettasks() {

		}
	},
	watch: {
		'doneType': function () {
			if (this.doneType == 'undone') {
				// axios.post('/m=Home&c=task&a=apptask', {
				// 	userid: this.userId,
				// 	courclass: this.classes,
				// 	type: 1
				// }).then(res => {
				// 	let list = res.courclass;
				// 	let ts = [];
				// 	for (var cls of list) {
				// 		ts.push(cls.tasks)
				// 	}
				// 	this.taskInfo = ts;
				// })
				// axios.post()
				this.taskInfo = [{
					CourseID: "数据结构",
					task: "",
					UserID: "04131111",
					taskid: 1,
					taskscore: "76",
					taskname: "计科1301班摸底考试",
					taskdescribe: "1111"
				}, {
					CourseID: "数据结构2",
					task: "",
					UserID: "04131111",
					taskiD: 2,
					taskscore: "76",
					taskname: "计科1301班摸底考试",
					taskdescribe: "1111"
				}];
				this.taskInfo.forEach(task => {
					task.url = `/undone/${task.taskID}`
				})
			} else {
				// axios.post('/m=Home&c=task&a=apptask', {
				// 	userid: this.userId,
				// 	courclass: this.classes,
				// 	type: 0
				// }).then(res => {
				// 	let list = res.courclass;
				// 	let ts = [];
				// 	for (var cls of list) {
				// 		ts.push(cls.tasks)
				// 	}
				// 	this.taskInfo = ts;
				// })
				this.taskInfo = [{
					CourseID: "数据结构",
					task: "",
					UserID: "04131111",
					taskid: 3,
					taskscore: "76",
					taskname: "计科1301班摸底考试已完成",
					tasktype: 1,
					taskdescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					task: "练习",
					UserID: "04131111",
					taskiD: 3,
					taskscore: "76",
					taskname: "计科1301班摸底考试已完成",
					taskdescribe: "已完成的考试",
					tasktype: 0
				}];
				this.taskInfo.forEach(task => {
					task.url = `/done/${task.taskID}`
				})
			}
		}
	}
}
</script>
