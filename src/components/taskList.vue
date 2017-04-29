<template>
	<div class="task-list-container">
		<table class="task-table">
			<thead class="task-table-head">
				<tr>
					<th class="th-no">编号</th>
					<th>课程</th>
					<th class="th-title">标题</th>
					<th class="th-type">类型</th>
					<th class="th-start">描述</th>
					<th>分数</th>
				</tr>
			</thead>
			<tbody>
				<tr class="task-tr" v-for="item in taskInfo">
					<td class="td-no">{{item.TaskID}}</td>
					<td class="td-course">{{item.CourseID}}</td>
					<td class="td-title">{{item.TaskName}}</td>
					<td class="td-type">{{item.Task}}</td>
					<td class="td-des">{{item.TaskDescribe}}</td>
					<td class="td-score">{{item.TaskScore}}</td>
					<td class="td-type">{{item.Task}}</td>
				</tr>
			</tbody>
		</table>
	</div>

</template>
<script>
export default {
	mounted() {
		this.changeData();
	},
	data() {
		return {
			taskInfo: []
		}
	},
	methods: {
		changeData: function () {
			let path = this.$route.path;
	        if(path.match(/(task\/undone)$/)) {
	          	this.taskInfo = [{
				CourseID: "数据结构",
				Task: "",
				UserID: "04131111",
				TaskID: 1,
				TaskScore: "总分",
				TaskName: "计科1301班摸底考试",
				TaskDescribe: "1111"
				}, {
				CourseID: "数据结构2",
				Task: "",
				UserID: "04131111",
				TaskID: 2,
				TaskScore: "总分",
				TaskName: "计科1301班摸底考试",
				TaskDescribe: "1111"
				}]
	        } else {
	          	this.taskInfo = [{
				CourseID: "数据结构",
				Task: "",
				UserID: "04131111",
				TaskID: 3,
				TaskScore: "总分",
				TaskName: "计科1301班摸底考试已完成",
				TaskDescribe: "已完成的考试"
				}]
	        }
		}
	},
	watch: {
  		'$route': 'changeData'
		 }

}
</script>
<style lang="less">
.task-table-head{
	border-top: 1px #ccc solid;
	border-bottom: 1px #ccc solid;
	tr {
		th {
			padding: 10px 0;
			font-size: 18px;
			font-weight: 400;
		}
	}
}
.task-table {

	width: 80%;
	margin: 20px auto;
	padding: 10px;
}
.task-tr {
	height: 42px;
	border-bottom: 1px #ccc solid;
	min-height: 42px;
    vertical-align: middle;
	font-size: 14px;
}
.task-list-ul {
	list-style: none;
	li {

	}

}
</style>
