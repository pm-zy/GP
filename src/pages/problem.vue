<template>
	<div >
		<TopBar path='题库'></TopBar>
		<router-view></router-view>
	</div>

</template>
<script>
import TopBar from '../components/topBar'
import Vue from 'vue';
import store from '../vuex/store'

export default {
	components: {
		TopBar
	},
	data() {
		if(!store.getters.getLoginStatus.status) {
			alert('请先登录');
			console.log(store.getters.getLoginStatus.status);
			this.$router.replace('/login');
		}
		return {}
	}
}
</script>
