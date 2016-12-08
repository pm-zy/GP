<template>
	<div class="body of-hd">
		<TopBar path='班级'></TopBar>
		<div class="left-menu">
			
		</div>
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

<style>
	.left-menu {
		height: 100%;
		width: 180px;
		background-color: #f7f7f7;
	}
</style>

