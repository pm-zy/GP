<template>
	<div class="task-list">
		{{taskInfo}}
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
					}]
		        } else {
		          	this.taskInfo = [{
					CourseID: "数据结构",
					Task: "",
					UserID: "04131111",
					TaskID: 1,
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

</style>
