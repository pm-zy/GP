<template>
	<div class="header-container">
		<div class="logo">LOGO</div>
		<div class="header-content">
			<span class="space-nav">
				<i class="fa fa-home fa-lg"></i>
				西安邮电大学 > 在线评测平台
			</span>
			<div class="header-right">
				<ul class="nav-right">
					<li>1</li>
					<li><a href="/about"><i class="fa fa-question-circle fa-lg"></i></a></li>
					<li>
						<a href="/user/123">
							<img  class="user-picture-sm" src="../assets/logo.png" />
						</a>
					</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {

	}
</script>

<style type="text/css">
	.header-container {
		width: 100%;
		overflow: hidden;
	}
	.logo {
		float: left;
		line-height: 50px;
		width: 180px;
		background-color: #3c375a;
		color: white;
		text-align: center;
	}
	.header-content {
		margin-left: 180px;
		color: #333;
		line-height: 49px;
		border-bottom: 1px #ccc solid;
	}
	..header-content a > i{
		color: #777;
	}
	.space-nav {
		width: 300px;
		color: #777;
		margin-left: 10px;
	}
	.space-nav > i{
		color: #e16531;
	}
	.header-right {
		float: right;
		overflow: hidden;
	}
	.nav-right li{
		display: inline-block;
		width: 50px;
	}
	.user-picture-sm {
		width: 32px;
		height: 32px;
	}
</style>