<template>
	<div class="body of-hd">
		<TopBar path='资料库'></TopBar>
        <VerticalNav :nav-data="menu" title='资料库'></VerticalNav>
		<router-view></router-view>
	</div>

</template>
<script>
import TopBar from '../components/topBar'
import VerticalNav from '../components/verticalNav'
import Vue from 'vue';
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
				title: '资料下载',
				icon: 'fa-download',
				to: '/info/download'
			}, {
				title: '题库',
				icon: 'fa-key',
				to: '/info/warehouse'
			}]
		}
	}
}
</script>
