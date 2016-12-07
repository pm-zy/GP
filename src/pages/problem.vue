<template>
	<div >
		<TopBar path='题库'></TopBar>
		<router-view></router-view>
	</div>

</template>
<script>
import TopBar from '../components/topBar'
import Vue from 'vue';
	export default {
		components: {
			TopBar
		}
	}
</script>

