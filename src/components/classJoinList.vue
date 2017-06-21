<template>
	<div class="class-join-list">
		<ul  class="class-join-list-ul" >
			<li >
				<div class="color-bar" :class="{'color-bar-active': classInfo.status==1}"></div>
				<div class="class-item-content">
					<div class="class-item-title">
						<span class="class-item-name">{{classInfo.courclassname}}</span>
					</div>
					<div class="class-item-info">
						<span>可容纳人数：
							<strong :class="{'class-open': classInfo.status==1}">{{classInfo.courclasssize}}</strong>
						</span>
						<span>已选人数：
							<strong :class="{'class-open': classInfo.status==1}">{{classInfo.courclassnum}}</strong>
						</span>
						<span>班级编号：{{classInfo.courclassid}}</span>
					</div>
				</div>
				<button class="btn btn-primary" @click="joinClass(classInfo.courclassid)">加入班级</button>
			</li>
		</ul>
	</div>
</template>
<script>
import axios from 'axios'
import store from '../vuex/store'
import urlConfig from '../configs/urlConfig'

export default {
	props: ['classInfo'],
	methods: {
		joinClass(id) {
			let userid = store.getters.getUserInfo.userid;
			let postData = {
				userid: userid,
				courclassid: this.classInfo.courclassid,
				commet: "申请加入"
			}
			console.log("post:::::");
			console.log(this.classInfo);
			let url = urlConfig.APIRoot + '?m=home&c=ban&a=join';
			axios({
				url: url,
				method: 'post',
				data: postData,
				transformRequest: [function (data) {
					let ret = ''
					for (let it in data) {
						ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					return ret
				}],
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).then(res => {
				alert(res.data.info);
				// this.$store.commit('addClasses', this.classInfo)
				// console.log(this.$store.getters.getReload)
				// store.commit('reload', !(this.$store.getters.getReload))
			})
		}
	},
	watch: {
		'classInfo': function () {
		}
	}

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
