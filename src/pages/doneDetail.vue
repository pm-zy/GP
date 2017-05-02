<template>
	<div class="detail-page done">
		<div class="left">
			<header>
				<i class="fa fa-check"></i>
				<h1>已完成</h1>

			</header>
			<section>
				fjkorjfk
			</section>
		</div>
		<div class="right">
			fwer fnjwen
		</div>
	</div>

</template>
<script>
export default {
	components: {

	}
}
</script>
<style lang="less">
.detail-page.done {
	.left {
		width: 150px;
		float: left;
		height: 100%;
		border-right: 1px #00cc66 solid;
		header {
			height: 70px;
			line-height: 70px;
			background-color: #00cc66;
			text-align: center;
			h1, i.fa {
				color: #fff;
				display: inline-block;
				font-size:18px;
			}
		}
		section {
			padding-top: 20px;
			padding-left: 20px;
		}

	}
	.right {
		width: 100%;
		height: 100%;
		margin-left: 150px;
		padding-left: 20px;
	}
}
</style>
