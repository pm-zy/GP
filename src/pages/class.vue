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
				<input type="radio" name="infoType" v-model="infoType" value="create" id="radio-create" />
				<label for="radio-create">
						<i class="fa fa-key fa-lg fa-fw"></i>
						<span>我创建的</span>
					</label>
				<hr />
				<router-link tag='label' to="/class/join">
					<i class="fa fa-plus fa-lg fa-fw"></i>
					<span>加入班级</span>
				</router-link>
			</div>
		</div>
		<div class="main-container">
			<div class="main-content">
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

// import JoinClass from '../components/joinClass'
export default {
	components: {
		TopBar,
		ClassList,
	},
	data() {
		if(!store.getters.getLoginStatus.status) {
			alert('请先登录');
			console.log(store.getters.getLoginStatus.status);
			this.$router.replace('/login');
		}
		return {
			infoType: 'join',
			classInfo: [{
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 1,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}, {
				courseclassid: 1,
				courclassname: '计科1302',
				courclasssize: 30,
				status: 0,
				courclassdescription: '计科期中摸底考',
				userid: 1,
				code: 1,
				courclassnum: 10
			}],
		}
	},
	watch: {
		infoType: 'switchType'
	},
	methods: {
		switchType: function(type) {
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
	.main-content {
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
        &:checked + label {
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
