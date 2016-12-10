<template>
	<div class="body of-hd">
		<TopBar path='班级'>gjgjhjhj</TopBar>
		<div class="left-menu of-hd">
			<div class="left-menu-header">
				<span>我的班级</span>
			</div>
			<div class="left-menu-content">
				<input type="radio" name="infoType" v-model="infoType" value="join" id="radio-join" />
				<label for="radio-join">
					<i class="fa fa-globe fa-lg fa-fw"></i>
					<span>我加入的</span>
				</label>
				<input type="radio" name="infoType" v-model="infoType" value="create" id="radio-create" />
				<label for="radio-create">
					<i class="fa fa-key fa-lg fa-fw"></i>
					<span>我创建的</span>
				</label>
			</div>
		</div>
		<div class="main-content">
			<ClassList :class-info="classInfo"></ClassList>
		</div>
	</div>

</template>
<script>
import ClassList from '../components/classList'
import TopBar from '../components/topBar'
import Vue from 'vue';
	export default {
		components: {
			TopBar,
			ClassList
		},
		data (){
			return {
				infoType: 'join',
				classInfo: [{
					courseclassid: 1,
					courclassname: '计科1302',
					courclasssize: 30,
					status: 1,
					courclassdescription: '计科期中摸底考',
					userid: 1,
					code: 1,
					courclassnum: 10
				}, {
					courseclassid: 1,
					courclassname: '计科1302',
					courclasssize: 30,
					status: 0,
					courclassdescription: '计科期中摸底考',
					userid: 1,
					code: 1,
					courclassnum: 10
				}]
			}
		}
	}
</script>

<style>
	.left-menu {
		height: 100%;
		width: 180px;
		float: left;
		background-color: #f0f2f4;
	}
	.left-menu-header {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 22px;
		color: #999;
		border-bottom: 1px solid #d5d5d5;
	}
	.main-content { 
		width: 100%;
		height: 100%;
	}
	.left-menu-content{
		list-style: none;
		padding: 0;
		margin-top: 20px;
	}
	.left-menu-content input {
		display: none;
	}
	.left-menu-content input:checked + label{
		background-color: #f9fafc;
	}
	.left-menu-content label {
		display: block;
		color: #4a4a4a;
		height: 50px;
		width: 180px;
		text-align: center;
		line-height: 50px;
		font-size: 13px;
	}
	.left-menu-content label span {
		margin-left: 15px;
	}
</style>

