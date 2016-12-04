<template>
	<div class="header-container">
		<div class="logo">LOGO</div>
		<div class="header-right">
			<div class="space-nav">
				西安邮电大学 > 在线评测平台
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
		/*height: 50px;*/
		/*line-height: 50px;*/
		width: 100%;
		/*float: left;*/
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
	.header-right {
		margin-left: 180px;
		color: #333;
		line-height: 49px;
		border-bottom: 1px #ccc solid;
		/*float: left;*/
		/*background-color: #ccc;*/
	}
	.space-nav {
		color: #777;
		margin-left: 10px;
	}
	.space-nav::before{
		content: '';
		width: 20px;
		height: 20px;
		background-image: url('../assets/school.png');
	}
</style>