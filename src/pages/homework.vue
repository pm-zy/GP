<template>
	<div class="body of-hd" >
		<TopBar path='作业'></TopBar>
		<VerticalNav :nav-data="menu" title='我的作业'></VerticalNav>
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
					to: '/homework/completed'
				}, {
					title: '未完成',
					icon: 'fa-send',
					to: '/homework/ing'
				}]
			}
		}
	}
</script>

