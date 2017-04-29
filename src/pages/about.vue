<template>
	<div>
		<TopBar path='关于本站'></TopBar>
		<div class="body">
			<div class="about-container">
				<p>在线考试平台-学生端</p>
				<p>作者: 潘铭</p>

			</div>
		</div>
	</div>

</template>
<script type="text/javascript">
import TopBar from '../components/topBar'
export default {
	components: {
		TopBar
	}
}
</script>
<style>
.about-container {
	width: 400px;
	height: 500px;
	padding-top: 50px;
	background-color: rgba(255,255,255,0.6);
	box-shadow: 2px 5px 5px #aaa;
	margin: 20px auto;
	text-align: center;
	color: #444;
}
</style>
