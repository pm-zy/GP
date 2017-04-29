<template>
	<div class="message-container">
		<div class="message-content">
			{{message.content}}
			<router-link class='message-return' to="/message">返回</router-link>
		</div>
	</div>
</template>
<script>
import store from '../vuex/store'

export default {
	beforeCreate() {
		console.log(store.getters.getMassage)

		this.message = store.getters.getMassage;
	},
	data() {
		return {
			message: {}
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
