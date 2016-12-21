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
					title: '收件箱',
					icon: 'fa-envelope',
					to: '/message/received'
				}, {
					title: '发件箱',
					icon: 'fa-send',
					to: '/message/send'
				}]
			}
		}
	}
</script>

