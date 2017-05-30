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
import axios from 'axios'
import store from '../vuex/store'

export default {
	components: {
		TopBar,
		taskList
	},
	props: ['reload'],
	data() {
		if (!store.getters.getLoginStatus.status) {
			alert('请先登录');
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
		this.gettasks(1) 
	},
	methods: {
		gettasks(type) {
			let userid = this.$store.getters.getUserInfo.userid; 
			let url = "http://" + window.location.hostname + ':8800' + '/api/ThinkPHP.php?m=home&c=task&a=apptasks';
			axios({
				url: url,
				method: 'post',
				data: { userid: userid,type: type },
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
				// console.log(res.data)
				if (res.status == 200) {
					let ret = res.data;
					console.log(res)
					if (ret.code == 0) {
						let taskList = []; 
						for(let cls of ret.courclass){
							for(let t of cls.tasks) {
								t.courclassid = cls.courclassid;
								if(t.status ==1) {
									t.url = `/undone/${t.courclassid}/${t.taskid}`
									t.type = 'undone';
								} else {
									t.url = `/done/${t.courclassid}/${t.taskid}`
									t.type = 'done'
								}
								taskList.push(t)
							}
						}
						this.taskInfo = taskList;
					}
				}
			})
		}
	},
	watch: {
		'doneType': function () {
			if (this.doneType == 'undone') {
				this.gettasks(1)
			} else {
				
				this.gettasks(0)
			}
		}
	}
}
</script>
