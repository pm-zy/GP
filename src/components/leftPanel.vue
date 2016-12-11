<template>
	<div class="left-container">
		<div class="logo">LOGO</div>
		<ul class="panel-menu">
			<router-link to="/index">
				<li>
					<i class="fa fa-coffee fa-lg fa-fw"></i>
					<span>主页</span>
				</li>
			</router-link>
			<router-link to="/class">
				<li>
					<i class="fa fa-group fa-lg fa-fw"></i>
					<span>班级</span>
				</li>
			</router-link>
			<router-link to="/homework">
				<li>
					<i class="fa fa-book fa-lg fa-fw"></i>
					<span>作业</span>
				</li>
			</router-link>
			<router-link to="/exam">
				<li>
					<i class="fa fa-edit fa-lg fa-fw"></i>
					<span>考试</span>
				</li>
			</router-link>
			<router-link to="/problem">
				<li>
					<i class="fa fa-cube fa-lg fa-fw"></i>
					<span>题库</span>
				</li>
			</router-link>
		</ul>
		<router-link class='panel-user' :to="'/user/'+ user.userId">
			<i class="fa fa-user-circle-o fa-lg fa-fw"></i>
			<span>个人空间</span>
		</router-link>
	</div>
	
</template>

<script>
	export default {
		data () {
			return {
				user: {
					userId: 123,
					userName: 'pm'
				}
			}
		}

	}
</script>

<style>
	
	.panel-menu{
		color: white;
		margin-top: 100px;
		list-style: none;
		border-bottom: 1px solid #3c375a;
	}
	.panel-menu a {
		color: white;
		line-height: 40px;
		height: 40px;
	}
	.panel-menu a:hover, .panel-menu a:focus {
		color: #84b045; 
		text-decoration: none;
	}
	.panel-menu li{
		width: 180px;
	}
	.panel-menu li > span, .panel-user > span {
		font-size: 14px;
		margin-left: 30px;
	}
	.panel-user {
		display: block;
		color: white;
		text-align: center;
		margin-top: 25px;
	}
	.panel-user:hover, .panel-user:focus {
		text-decoration: none;
	}
	a.router-link-active, .panel-user:hover, .panel-user:focus {
		color: #84b045;
	}
</style>