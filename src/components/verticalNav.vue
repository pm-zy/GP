<template>
	<div class="vertival-nav">
		<ul class="vertical-nav-ul">
			<li v-for="nav in navData" >
				<i class="fa fa-fw" :class="nav.icon"></i>
				<router-link :to="nav.to" >{{nav.title}}</router-link>
			</li>

		</ul>
	</div>
</template>
<script>
	
	export default {
		props: ['navData'],
	}
</script>
<style>
	
</style>