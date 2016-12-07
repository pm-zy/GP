<template>
	<div id="index">
		<TopBar path='班级'></TopBar>
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

