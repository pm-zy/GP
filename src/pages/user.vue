<template>
	<div >
		<TopBar path='我的空间'></TopBar>
		<div class="body">
			<div class="user-container">
				<div class="pic">
					<img :src="userPic" alt="">
				</div>
				<div class="user-info">
					<h2>{{nickname}}</h2>
					<p class="org">{{org}}</p>
					<p>{{personId}}</p>
					<p v-if="userType == 1" class="student">学生</p>
					<input type="button" class="logout" value="退出登录" @click='logout'><br/>
					<a @click='modifyPassword'>修改密码</a>
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

export default {
	data() {
		document.getElementsByClassName('body')[1].style.filter=""
		if(!store.getters.getLoginStatus.status) {
			alert('请先登录');
			this.$router.replace('/login');
			return {};
		}
		return store.getters.getUserInfo
	},
	components: {
		TopBar
	},
	beforeUpdate: function() {
		document.getElementsByClassName('body')[1].style.filter=""
	},
	methods: {
		logout: function() {
			this.$store.dispatch('logout');
			this.$router.replace('/login');
		},
		modifyPassword: function() {
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
	.user-info  {
		text-align: center;
		h2 {

		}
		.org {
			color: #888;
			font-size: 16px;
		}
		.student {
			font-size: 18px;
			color: #abcdef;
			font-weight: bold;

		}
		.logout {
			background: none;
			border: 1px #5A4BB4 solid;
			border-radius: 10px;
			color: #5A4BB4;
			font-size: 18px;
			height: 45px;
			width: 100px;
			line-height: 45px;
			&:hover {
				border: 1px #84b045 solid;
				color: #84b045;
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
	.pic {
		width: 100px;
		height: 100px;
		margin: 10px auto;
		overflow: hidden;
		background-color: #fff;
		border-radius: 10px;
		img {
			width: 100px;
			height: 100px;
		}
	}
}
</style>
