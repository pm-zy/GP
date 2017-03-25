<template>
	<div id="index">
		<TopBar path='主页'></TopBar>
		<div class="body">
			<div class="index-menu-container">
				<div class="first-line">
					<div class="index-menu-item">
						<router-link to="/class">
							<i class="fa fa-group fa-3 "></i><br />
							我的班级
						</router-link>
					</div>
					<div class="index-menu-item">
						<router-link to="/task">
							<i class="fa fa-edit fa-3 "></i><br />
							我的任务
						</router-link>
					</div>
				</div>
				<div class="secd-line">
					<div class="index-menu-item">
						<router-link to="/message">
							<i class="fa fa-envelope fa-3 "></i><br />
							我的消息
						</router-link>
					</div>
					<div class="index-menu-item">
						<router-link :to="'/user/'+ user.userId">
							<i class="fa fa-user-circle-o fa-3 "></i><br />
							个人空间
						</router-link>
					</div>
				</ul>

			</div>
		</div>
	</div>

</template>
<script type="text/javascript">
import TopBar from '../components/topBar'
import Vue from 'vue';
	export default {
		data () {
			return {
				user: {
					userId: 123,
					userName: 'pm'
				}
			}
		},
		components: {
			TopBar
		}
	}
</script>
<style lang="less">
	.index-menu-container {
		background-color: rgba(255, 255, 255, 0.5);
		margin: 50px auto;
		width: 800px;
		height: 500px;
		text-align: center;
		padding: 50px;
		i.fa-3 {
			font-size: 3em;
		}
		.index-menu-item {
			list-style: none;
			display: inline-block;
			border-radius: 5px;
			min-width: 150px;
			width: 150px;
			height: 150px;
			margin: 25px;
			text-align: center;
			a {
				padding: 40px;
				display:inline-block;
				width: 150px;
				height: 150px;
				line-height: 30px;
				color: #fff;
				font-weight: bold;
				&:hover {
					text-decoration: none;
				}
			}
		}
		.first-line div:first-child {
			background-color: #3d5a96;
		}
		.first-line div:last-child {
			background-color: #574f80;
		}
		.secd-line div:first-child {
			background-color: #00ADEF;
		}
		.secd-line div:last-child {
			background-color: #FBBC09;
		}
	}
</style>
