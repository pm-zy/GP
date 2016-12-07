<template>
	<div id="header">
		
		<div class="header-content">
			<span class="space-nav">
				<i class="fa fa-home fa-lg"></i>
				西安邮电大学 > 在线评测平台 > {{path}}
			</span>
			<div class="header-right">
				<ul class="nav-right">
					<li>1</li>
					<li><a href="/about"><i class="fa fa-question-circle fa-lg"></i></a></li>
					<li>
						<a href="/user/123">
							<img  class="user-picture-sm" src="../assets/github.png" />
						</a>
					</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>
<script type="text/javascript">

	export default {
		props: ['path'],
		data() {
			return {

			}
		}
	}
</script>

<style type="text/css">
	.header-content {
		background-color: #fff;
		color: #333;
		line-height: 49px;
		/*border-bottom: 1px #ccc solid;*/
		box-shadow: 0 3px 3px #ccc;
	}
	.header-content a > i{
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
		border-radius: 50%;
	}
</style>