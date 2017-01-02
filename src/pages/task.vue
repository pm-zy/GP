<template>
	<div class="body of-hd" >
		<TopBar path='任务'></TopBar>
		<VerticalNav :nav-data="menu" title='我的任务'></VerticalNav>
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
					title: '未完成',
					icon: 'fa-circle-o-notch',
					to: '/task/undone'
				}, {
					title: '已完成',
					icon: 'fa-check-square-o',
					to: '/task/done'
				}]
			}
		}
	}
</script>

