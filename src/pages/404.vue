<template>
	<div class="body-404">
		<h1><i class="fa fa-cutlery"></i> 404</h1>
		<p><i class="fa fa-blind fa-3"></i> I don't kown where's the page</p>
		<router-link to='/index'> <i class="fa fa-anchor fa-2"></i>返回主页</router-link>
	</div>

</template>
<script>
export default {
	components: {
	}
}
</script>
<style lang='less'>
.body-404{
	background-color: #00bbd4;
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	text-align: center;
	h1{
		margin-top: 20%;
		color: #e1f8fb;
		font-size: 200px;
		line-height: 200px;
		font-weight: 800;
		text-shadow: 10px 10px 0px #80dfea;
		i {
			font-size: 180px;
		}
	}
	p {
		color: #e1f8fb;
		font-size: 30px;
		text-shadow: 2px 2px 2px #80dfea;
	}
	a {
		color: #fff;
		font-size: 20px;
		i {
			margin-right: 20px;
		}
	}
}
</style>
