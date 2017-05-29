<template>
	<div class="message-list">
		<ul class="class-list">
			<li v-for="cls of classMessage">
				<h4>{{cls.courclassname}}</h4>
				<p class="tip-content" v-show="!cls.tasks.lenght">该课程班暂无消息通知</p>
				<ul class="message-list-ul">
					<li v-for="item in cls.tasks">
						<a @click="changeMessage(item)">
							<div class="color-bar" :class="{'color-bar-active': messageStatus}"></div>
							<div class="message-item-content">
								<span class="message-item-title">{{item.taskname}}，你还没有提交答案</span> 
							</div>
						</a>
					</li>
				</ul>
			</li>
	
		</ul>
	
	</div>
</template>

<script>
import store from '../vuex/store'
import axios from 'axios'
export default {
	// mounted() {
	// 	this.changeData();
	// },
	data() {
		return {
			messages: [],
			classMessage: []
		}
	},
	created() {
		this.getMessages();
	},
	methods: {
		getMessages() {
			let userid = store.getters.getUserInfo.userid;
			let url = "http://" + window.location.hostname + ':8800' + '/api/ThinkPHP.php?m=home&c=message&a=getmessage'

			axios({
				url: url,
				method: 'post',
				data: { userid: userid, type: 1 },
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
				console.log(res)
				if (res.status == 200) {
					if (res.data.code == 0) {
						this.classMessage = res.data.courseclass;
					}
				}
			})
		},
		changeMessage(item) {
			store.commit('changeMessage', item);
			this.$router.replace('/task')
		},
		changeData: function () {
			let path = this.$route.path;
			if (path.match(/(message\/unread)$/)) {
				this.messages = [{
					title: '作为开发者我是如何跟上时代脚步的',
					id: '001',
					content: '作为佛巍峨魔法快乐巍峨册封为罗马代脚步的'
				}, {
					title: 'JavaScript 深入之从原型到原型链',
					id: '002',
					content: 'JavaScript 深入系列的第一篇，从原型与原型链开始讲起，如果你想知道构造函数的实例的原型，原型的原型，原型的原型的原型是什么，就来看看这篇文章吧'
				}];
				this.messageStatus = false;
			} else {
				this.messages = [{
					title: '一个非常适合入门学习的 React-Native 博客项目',
					id: '003',
					content: '作为佛巍峨魔法快乐巍峨册封为罗马代脚步的一个非常适合入门学习的 React-Native 博客项目，代码清晰、结构合理'
				}];
				this.messageStatus = true;
			}
		}
	},
	watch: {
		'$route': 'changeData'
	}
}
</script>

<style lang="less">
a:hover {
	text-decoration: none;
}

.message-list {
	width: 80%;
	margin: 50px 180px;
	.class-list {
		background-color: rgba(110, 150, 113, 0.2);
		padding: 10px 20px;
		margin: 10px;
	}
}

.message-list-ul {
	list-style: none;
	li {
		background-color: #fff;
		box-shadow: 1px 3px 3px #ccc;
		display: block;
		height: 68px;
		width: 80%;
		margin: 6px auto;
		line-height: 34px;
		&:hover {
			background-color: #eeeeFF
		}
	}
}

.message-item-content {
	margin-left: 15px;
	font-size: 15px;
	color: #4a4a4a;
	.message-item-title {
		font-weight: 700;
		color: #3798e9;
		display: block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.message-item-desc {
		font-weight: normal;
		display: block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}
</style>
