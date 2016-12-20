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

	export default {
		components: {
			TopBar,
			VerticalNav
		},
		data() {
			return {
				menu: [{
					title: '已完成',
					icon: 'fa-envelope',
					to: '/exam/completed'
				}, {
					title: '未完成',
					icon: 'fa-send',
					to: '/exam/ing'
				}]
			}
		}
	}
</script>

