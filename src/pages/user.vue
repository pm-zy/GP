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
				</div>
			</div>
		</div>
	</div>

</template>
<script type="text/javascript">
import TopBar from '../components/topBar'
import Vue from 'vue';

	export default {
		data() {
			return {
				nickname: 'PM',
				email: 'i@varpm.com',
				telNum: '18829295436',
				personId: '0001',
				org: '西安邮电大学 计算机学院 计科1303',
				userType: 1
			}
		},
		components: {
			TopBar
		}
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
