<template>
	<div class="body of-hd" >
		<TopBar path='我的消息'></TopBar>
		<VerticalNav :nav-data="menu" title='我的消息'></VerticalNav>
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
				title: '未读消息',
				icon: 'fa-envelope',
				to: '/message/unread'
			}, {
				title: '已读消息',
				icon: 'fa-envelope-open',
				to: '/message/read'
			}]
		}
	}
}
</script>
