<template>
	<div class="main-container">
		<div class="task-list-container main-content">
			<div class="tip-content" v-show="!taskInfo.length">没有符合当前条件的任务</div>
			<ul class="task-ul message-list-ul">
				<li v-for="item in taskInfo">
					<div class="color-bar" :class="{'color-bar-active': true}"></div>
					<div class="list-content message-item-content">
	
						<span class="message-item-title">
							<router-link :to='item.url'>{{item.taskname}}</router-link>
						</span>
						<span class="infos">
							{{item.taskdescribe}}
						</span>
						<div class="other-info">
							<span class="tips">编号: </span>
							<span class="infos">{{item.taskid}}</span>
							<span class="tips" v-show="item.totalscore !== null">分数: </span>
							<span class="infos" v-show="item.totalscore !== null">{{item.totalscore}}</span>
							<span class="tips">开始时间: </span>
							<span class="infos">{{item.starttime}}</span>
							<span class="tips">结束时间: </span>
							<span class="infos">{{item.endtime}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	mounted() {
		this.changeData();
	},
	props: ['taskInfo'],
	data() {
		return {
		}
	},
	created() {
		console.log('create')
	},
	methods: {
		getList() {
			axios.post('m=Home&c=task&a=apptask', {
				userid: fdf
			})
				.then(response => {

				})
				.catch(error => {

				})
		},
		changeData: function () {
			let path = this.$route.path;

		}
	},
	watch: {
		'$route': 'changeData'
	}

}
</script>
<style lang="less">
.task-table-head {
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
		.tip-content {
			font-size: 24px;
			font-weight: bold;
			color: #509876;
			margin: 20px auto;
			text-align: center;

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
			.undone {
				border-left: 7px rgb(255, 110, 110) solid;
			}
			.done {
				border-left: 7px #70a474 solid;
			}
			li {
				// border-radius: 10px;
				display: block;
				width: 80%;
				height: 60px;
				background-color: #fff;
				margin: 15px auto;
				position: relative;
				box-shadow: 1px 3px 3px #ccc; // border: 2px #65AB7B solid;
				border-top: none;
				border-right: none; // border-left: 4px #65AB7B solid;
				// padding: 10px 15px;
				padding-right: 10px;
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
					a+span.infos {
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
						color: #d7434c;
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
	li {}
}
</style>
