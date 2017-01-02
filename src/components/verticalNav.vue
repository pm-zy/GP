<template>
	<div class="vertival-nav">
		<p class="menu-header">{{title}}</p>
		<ul class="vertical-nav-ul">
			<li v-for="nav in navData" >
				<router-link :to="nav.to" >
					<i class="fa fa-fw" :class="nav.icon"></i>
					<span>{{nav.title}}</span>
				</router-link>
			</li>

		</ul>
	</div>
</template>
<script>
	export default {
		props: ['navData', 'title'],
	}
</script>
<style lang='less'>
	.vertival-nav {
		height: 100%;
		width: 180px;
		float: left;
		overflow: hidden;
		background-color: #f0f2f4;
		.menu-header {
			width: 100%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 22px;
			color: #999;
			border-bottom: 1px #ccc solid;
		}
		.vertical-nav-ul {
			color: white;
			margin-top: 20px;
			list-style: none;
			padding-left: 0;
			li {
				width: 180px;
				font-weight: bold;
				a {
					display: block;
					text-align: center;
					width: 180px;
					font-size: 14px;
					line-height: 50px;
					height: 50px;
					color: #4a4a4a;
					&:hover , &:focus {
						text-decoration: none;
						background-color: #f9fafc;
					}
					span {
						margin-left: 30px;
					}
				}
				a.router-link-active {

					background-color: #f9fafc;
				}
			}
		}
	}
</style>