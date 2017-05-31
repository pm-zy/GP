<template>
	<div>
		<TopBar path='我的空间'></TopBar>
		<div class="body">
			<div class="user-container">
				<div class="left">
					<div class="pic">
						<img :src="userPic" alt="">
					</div>
					<div class="other-info-container">
						<p v-if="usertype == 1" class="student">学生</p>
						<input type="button" class="logout" value="退出登录" @click='logout'>
						<br/>
						<a @click='modifyPassword'>修改密码</a>
					</div>
				</div>
				<div class="user-info">
					<h2>{{nick}}</h2>
					<p class="org">{{name}}</p>
					<p class="org">{{school}} {{college}} {{major}} </p>
					<p class="stu-number">学号: {{userid}}</p>
				</div>
	
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
import TopBar from '../components/topBar'
import Vue from 'vue';
import { logout } from '../vuex/actions'
import { mapActions } from 'vuex'
import store from '../vuex/store'
import axios from 'axios'

export default {
	data() {
		document.getElementsByClassName('body')[1].style.filter = ""
		if (!store.getters.getLoginStatus.status) {
			alert('请先登录');
			this.$router.replace('/login');
			return {};
		}
		return store.getters.getUserInfo
	},
	components: {
		TopBar
	},
	created() {
		this.getUserData();
	},
	beforeUpdate: function () {
		document.getElementsByClassName('body')[1].style.filter = ""
	},
	methods: {
		getUserData() {
			let userInfo = store.getters.getUserInfo;
			let url = "http://" + window.location.hostname + ':8800' + '/api/ThinkPHP.php?m=Home&c=student&a=studentdetail';
			axios({
				url: url,
				method: 'post',
				data: { userid: userInfo.userid },
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
			})
		},
		logout: function () {
			this.$store.commit('logout');
			this.$router.replace('/login');
		},
		modifyPassword: function () {
			let url = `/user/${this.personId}/modifyPassword`;
			this.$router.replace(url)
		}
	},
}
</script>
<style lang="less">
@hover-green: #84b045;
.user-container {
	width: 80%;
	margin: 20px auto;
	overflow: hidden;
	.user-info {
		padding-left: 20px;
		overflow: hidden;
		background-color: #fff;
		height: 150px;
		h2 {
			color: #666;
		}
		.org {
			color: #888;
			font-size: 16px;
		}
		.stu-number {
			color: #8FC7B4;
		}
	}
	.left {
		float: left;
		overflow: hidden;
		.pic {
			width: 150px;
			height: 150px;
			margin: 10px 0;
			img {
				width: 150px;
				height: 150px;
				border-radius: 10px;
			}
		}
		.other-info-container {
			margin-top: 10px;
			text-align: center;
			.student {
				font-size: 18px;
				color: #abcdef;
				font-weight: bold;
				text-align: center;
			}
			.logout {
				background: none;
				border-radius: 10px;
				border: none;
				color: #fff;
				font-size: 18px;
				height: 45px;
				width: 100px;
				line-height: 45px;
				background-color: #8FC7B4;
				&:hover {
					background-color: #fac26c;
				}
			}
			a {
				line-height: 40px;
				font-size: 16px;
				&:hover {
					cursor: pointer;
					color: @hover-green
				}
			}
		}
	}
}
</style>
