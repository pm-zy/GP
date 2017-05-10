<template>
	<div class="main-container">
		<div class="task-list-container main-content">
			<ul class="task-ul">
				<li v-for="item in taskInfo" :class="{'type-test': item.TaskType}">
					<div class="task-type" v-if="item.TaskType">
						E
					</div>
					<div class="task-type" v-else>
						T
					</div>
					<div class="list-content">
						<router-link :to='item.url'>{{item.TaskName}}</router-link>
						<span class="infos">
							{{item.TaskDescribe}}
						</span>
						<div class="other-info">
							<span class="tips">编号: </span>
							<span class="infos">{{item.TaskID}}</span>
							<span class="tips">类型: </span>
							<span class="infos">{{item.Task}}</span>
							<span class="tips">分数: </span>
							<span class="infos">{{item.TaskScore}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
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
	created() {
		console.log('create')
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
					TaskScore: "76",
					TaskName: "计科1301班摸底考试",
					TaskDescribe: "1111"
				}, {
					CourseID: "数据结构2",
					Task: "",
					UserID: "04131111",
					TaskID: 2,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试",
					TaskDescribe: "1111"
				}]
				this.taskInfo.forEach(task => {
					task.url = `/undone/${task.TaskID}`
				})
	        } else {
	          	this.taskInfo = [{
					CourseID: "数据结构",
					Task: "",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskDescribe: "已完成的考试",
					TaskType: 0
				}, {
					CourseID: "数据结构",
					Task: "考试",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskDescribe: "已完成的考试",
					TaskType: 0
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskDescribe: "已完成的考试",
					TaskType: 0
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskDescribe: "已完成的考试",
					TaskType: 1
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 1,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 0,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 0,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 0,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 0,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 0,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 0,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 0,
					TaskDescribe: "已完成的考试"
				}, {
					CourseID: "数据结构",
					Task: "练习",
					UserID: "04131111",
					TaskID: 3,
					TaskScore: "76",
					TaskName: "计科1301班摸底考试已完成",
					TaskType: 0,
					TaskDescribe: "已完成的考试"
				}];
				this.taskInfo.forEach(task => {
					task.url = `/done/${task.TaskID}`
				})
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
.main-container {
	height: 90%;
	margin-left: 180px;
	box-sizing: content-box;
	position: relative;
	.main-content {
		position: absolute;
	    width: 100%;
	    height: 100%;
		overflow-y: scroll;
	    ul {
	        margin-top: 50px;
			margin-bottom: 50px;
	    }
	}
	.task-list-container {
		.task-ul {
			.type-test {
				border-left: 5px #E65F59 solid;
				.task-type {
					background-color: #F86761;
				}
			}
			li {
				border-radius: 10px;
				display: block;
				width: 80%;
				height: 60px;
				background-color: #fff;
				margin: 15px auto;
				position: relative;
				box-shadow: 1px 3px 3px #ccc;
				// border: 2px #65AB7B solid;
				border-top: none;
				border-right: none;
				border-left: 4px #65AB7B solid;
				padding: 10px 15px;
				.task-type {
					float: left;
					background-color: #65AB7B;
					height: 30px;
					width: 30px;
					color: #fff;
					text-align: center;
					line-height: 30px;
					font-weight: bold;
					border-radius: 50%;
					position: relative;
					top: 50%;
					transform: translateY(-50%);
				}
				.list-content {
					overflow: hidden;
					padding-left: 10px;
					position: relative;
					top: 50%;
					transform: translateY(-50%);
					a {
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
						display: block;
					}
					a + span.infos {
						max-width: 80%;
    					display: inline-block;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}
					.other-info {
						float: right;
						overflow: hidden;
					}
					.tips {

					}
				}
			}
		}
	}
}

.task-table {
	width: auto;
	margin: 20px auto;
}
.task-tr {
	height: 42px;
	min-height: 42px;
	font-size: 14px;
}
.task-list-ul {
	list-style: none;
	li {

	}

}
</style>
