<template>
	<div>
		<TopBar path='我的消息'></TopBar>
		<div class="body">
			
		</div>
	</div>

</template>
<script>
import TopBar from '../components/topBar'
import Vue from 'vue';
	export default {
		components: {
			TopBar
		},
		data() {
			return {
				menu: {
					title: '收件箱'，
					icon: 'fa-evelope',
					to: '/'
				}
			}
		}
	}
</script>

