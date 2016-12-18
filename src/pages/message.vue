<template>
	<div>
		<TopBar path='我的消息'></TopBar>
		<div class="body">
			<VerticalNav :nav-data="menu"></VerticalNav>
		</div>
		<router-view name="message"></router-view>
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

