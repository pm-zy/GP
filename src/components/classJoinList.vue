<template>
	<div class="class-join-list">
		<ul class="class-join-list-ul">
			<li v-if="classInfo && classInfo.length > 0" v-for="item in classInfo">
				<div class="color-bar" :class="{'color-bar-active': item.status==1}"></div>
				<div class="class-item-content">
					<div class="class-item-title">
						<span class="class-item-name">{{item.courclassname}}</span>
						<span class="class-item-desc">{{item.courclassdescription}}</span>
					</div>
					<div class="class-item-info">
						<span>可容纳人数：<strong :class="{'class-open': item.status==1}">{{item.courclasssize}}</strong></span>
						<span>已选人数：<strong :class="{'class-open': item.status==1}">{{item.courclassnum}}</strong></span>
						<span>班级编号：{{item.courseclassid}}</span>
					</div>
				</div>
				<button class="btn btn-primary">加入班级</button>
			</li>
		</ul>
	</div>

</template>
<script>
	export default {
		props: ['classInfo'],

	}
</script>
<style lang="less">
	.class-join-list-ul {
		padding: 0;
		list-style: none;
		li {
			background-color: #fff;
			box-shadow: 1px 3px 3px #ccc;
			display: inline-block;
			height: 68px;
			width: 80%;
			margin: 6px auto;
			line-height: 34px;
			button {
				margin-top: 10px;
				float: right;
			}
		}
	}
	.class-item-content {
		margin-left: 15px;
		.class-item-title {
			font-size: 15px;
			color: #4a4a4a;
			.class-item-name {
				font-weight: 700;
				color: #3798e9;
				width: 150px;
				display: inline-block;
			}
		}
		.class-item-info {
			span {
				color: #999;
				width: 30%;
				display: inline-block;
			}
		}
	}
	.class-open {
		color: #3798e9
	}
</style>