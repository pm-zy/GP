<template>
	<div class="join-container">
		<div class="join-content">
			<h2>加入班级</h2>
			<p>输入要加入班级的编号，点击「找一找」按钮，核实班级信息无误后点击「申请加入」按钮就行。</p>
			<p>申请发送后，该班级的管理员选择「同意」加入，则你会成为该班级的成员。</p>
			<p>如果班级属性设置为「允许任何人加入该班」，则无需班级管理员同意就可以「直接加入」该班级。</p>
			<div class="join-search">
				<input type="text" class="input-large" v-model="searchId" placeholder="请输入班级编号" />
				<button class="btn btn-primary" name="" @click="search">找一找</button>
				<router-link class='join-return' to="/class">返回</router-link>
			</div>
			<div class="search-result">
				<ClassJoinList :class-info="classInfo" ></ClassJoinList>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
import ClassJoinList from './classJoinList'
import axios from 'axios'
import store from '../vuex/store'
export default {
	components: {
		ClassJoinList
	},
	data() {
		return {
			classInfo: [{
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}],
			searchId: ''
		}
	},
	methods: {
		search() {
			// ajax
			axios.post('/m=Home&c=search&a=searchclass', {
				userId: store.getters.getUserInfo.userid,
				courclassid: this.searchId
			}).then(res => {

			})
		}
	}
}
</script>
<style lang="less">
.join-container {
	text-align: center;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.5);
	padding: 50px;
	.join-content {
		background-color: rgba(0,0,0,0.4);
		padding: 40px;
		width: 700px;
		text-align: left;
		margin: 50px auto;
		color: white;
		.join-search {
			margin-top: 20px;
			input[type='text'] {
				width: 400px;
				height: 32px;
				border: none;
				border-radius: 5px;
				line-height: 32px;
				color: #444;
				font-size: 18px;
				padding-left: 10px;
				margin-right: 10px;
			}
			button {
				width: 100px;
			}
			.join-return {
				margin-left: 10px;
				font-size: 15px;
				display: inline-block;
				line-height: 15px;
			}
		}
		.search-result{
			width: 700px;

		}
	}
}
</style>
