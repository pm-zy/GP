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

	export default {
		components: {
			TopBar,
			VerticalNav
		},
		data() {
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
