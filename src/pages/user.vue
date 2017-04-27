<template>
	<div >
		<TopBar path='我的空间'></TopBar>
		<div class="body">
			<div class="user-container">
				<div class="pic">
					<img src="../assets/logo.png" alt="">
				</div>
				<div class="user-info">
					<h2>{{nickname}}</h2>
					<p class="org">{{org}}</p>
					<p v-if="userType == 1" class="student">学生</p>
					<input type="button" class="logout" value="退出登录" @click='logout'>
				</div>
			</div>
		</div>
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
			if(!store.getters.getLoginStatus.status) {
				alert('请先登录');
				console.log(store.getters.getLoginStatus.status);
				this.$router.replace('/login');
			}
			return store.getters.getUserInfo
		},
		components: {
			TopBar
		},
		methods: {
			logout: function() {
				this.$store.dispatch('logout');
				this.$router.replace('/login');
			},
		},

		// 	mapActions([
		// 		'logout'
		// 	]),
		// vuex: {
		// 	getters: {
		// 		logout
		// 	},
		// 	actions: {
		// 		logout
		// 	}
		// }
	}
</script>
<style lang="less">
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
