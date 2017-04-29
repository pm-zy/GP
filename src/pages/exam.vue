<template>
	<div class="body of-hd" >
		<TopBar path='考试'></TopBar>
		<VerticalNav :nav-data="menu" title='我的考试'></VerticalNav>
		<router-view ></router-view>
	</div>

</template>
<script>
import TopBar from '../components/topBar'
import VerticalNav from '../components/verticalNav'
import store from '../vuex/store'


export default {
	components: {
		TopBar,
		VerticalNav
	},
	data() {
		if(!store.getters.getLoginStatus.status) {
			alert('请先登录');
			console.log(store.getters.getLoginStatus.status);
			this.$router.replace('/login');
		}
		return {
			menu: [{
				title: '未完成',
				icon: 'fa-circle-o-notch',
				to: '/exam/undone'
			}, {
				title: '已完成',
				icon: 'fa-check-square-o',
				to: '/exam/done'
			}]
		}
	}
}
</script>
