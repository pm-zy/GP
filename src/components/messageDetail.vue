<template>
	<div class="message-container">
		<div class="message-content">
			{{message.content}}
			<router-link class='message-return' to="/message">返回</router-link>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			message: {
                title: '作为开发者我是如何跟上时代脚步的',
                id:'001',
                content:'作为佛巍峨魔法快乐巍峨册封为罗马代脚步的'
            }

		}
	}
}
</script>
<style lang="less">
	.message-container {
		text-align: center;
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.5);
		padding: 50px;
		.message-content {
			background-color: rgba(0,0,0,0.4);
			padding: 40px;
			width: 700px;
			text-align: left;
			margin: 50px auto;
			color: white;
		}
	}
</style>
