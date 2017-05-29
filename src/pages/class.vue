<template>
	<div class="body of-hd">
		<TopBar path='班级'></TopBar>
		<div class="left-menu of-hd">
			<div class="left-menu-header">
				<span>我的班级</span>
			</div>
			<div class="left-menu-content">
				<input type="radio" name="infoType" v-model="infoType" value="join" id="radio-join" />
				<label for="radio-join">
					<i class="fa fa-globe fa-lg fa-fw"></i>
					<span>我加入的</span>
				</label>
				<!--<input type="radio" name="infoType" v-model="infoType" value="create" id="radio-create" />
				<label for="radio-create">
					<i class="fa fa-key fa-lg fa-fw"></i>
					<span>我创建的</span>
				</label>-->
				<hr />
				<router-link tag='label' to="/class/join">
					<i class="fa fa-plus fa-lg fa-fw"></i>
					<span>加入班级</span>
				</router-link>
			</div>
		</div>
		<div class="main-container">
			<div :class="loading">
				<Spin size="large"></Spin>
			</div>
			<div class="main-content">
				<button class="btn btn-primary reload-btn " @click="reload">刷新列表</button>
				<ClassList :class-info="classInfo"></ClassList>
			</div>
		</div>
		
		<router-view></router-view>
	</div>
</template>
<script>
import ClassList from '../components/classList'
import TopBar from '../components/topBar'
import axios from 'axios'
import store from '../vuex/store'

export default {
	components: {
		TopBar,
		ClassList,
	},
	data() {
		if (!store.getters.getLoginStatus.status) {
			alert('请先登录');
			this.$router.replace('/login');
		}
		return {
			infoType: 'join',
			loading: 'loaded',
			classInfo: [],
		}
	},
	created() {
		this.loading = "loading"
		this.getClasses();
	},
	watch: {
		infoType: 'switchType',
		isReload: function(val) {
			console.log('reload:');
			console.log(val)
			getClasses();
		}
	},
	computed: {
		isReload: function() {
			console.log(store.state.reload)
			return store.state.reload;
		}
	},
	methods: {
		reload() {
			this.getClasses();
		},
		getClasses() {
			let userid = store.getters.getUserInfo.userid;
			let url = "http://" + window.location.hostname + ':8800' + '/api/ThinkPHP.php?m=home&c=search&a=getmyClass'

			axios({
				url: url,
				method: 'post',
				data: {userid: userid},
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
				this.loading = "loaded"
				if(res.data.code == 0) {
					let classArr = res.data.class;
					this.$store.commit('setClasses', res.data.class)
					this.classInfo = this.$store.getters.getClasses;
					let ids = [];
					for(let cl of classArr) {
						ids.push(cl.courseclassid)
					}
				}
				console.log(res)
			})
		},
		switchType: function (type) {
			var fakeData = [{
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 1,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 2,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}];
			var fakeData2 = [{
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 1,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}]
			var that = this;
			if (type == 'join') {
				this.classInfo = fakeData;
				// axios.post('')
			} else {
				this.classInfo = fakeData2;
			}
		}
	}
}
</script>

<style lang="less">
.loaded {
	display: none;
}

.loading {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	top: 25%;
	height: 35px;
	width: 35px;
	h4 {
		color: #39f;
	}
	.ivu-spin {
		margin: 0 auto
	}
}

.left-menu {
	height: 100%;
	width: 180px;
	float: left;
	background-color: #f0f2f4;
	.left-menu-header {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 22px;
		color: #999;
		border-bottom: 1px solid #d5d5d5;
	}
}

.main-container {
	height: 90%;
	margin-left: 180px;
	box-sizing: content-box;
	position: relative;
	.reload-btn {
		border: none;
		position: fixed;
		top: 60px;
		left: 400px;
	}
	.main-content {
		top: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		ul {
			margin-top: 50px;
			margin-bottom: 50px;
		}
	}
}

.left-menu-content {
	list-style: none;
	padding: 0;
	margin-top: 20px;
	input {
		display: none;
		&:checked+label {
			background-color: #f9fafc;
		}
	}
	label {
		display: block;
		color: #4a4a4a;
		height: 50px;
		width: 180px;
		text-align: center;
		line-height: 50px;
		font-size: 13px;
		span {
			margin-left: 15px;
		}
	}
	hr {
		border-top: 1px #ddd solid;
	}
}
</style>
