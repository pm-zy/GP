<template>
    <div class="fixed-mask">
        <div class="container">
            <div class="content">
                <p>
                    <span class="text">手机号码:</span> <span class="tel">{{userInfo.telNum}}</span>
                </p>
                <input type="password" v-model="oldPassword" class="input form-control" value="" placeholder="请输入原密码" />
                <input type="password" v-model="newPassword" class="input form-control" value="" placeholder="请输入新密码" />
                <input type="password" v-model="verify" class="input form-control" value="" placeholder="请确认新密码" />
                <input type="button" class="btn btn-primary pm-fl-right" name="" value="提交修改" @click="submit"/>
                <p class="tips">{{tips}}</p>
            </div>
            <input type="button" name="" class="go-back-btn" value="返回" @click="goBack"/>
        </div>

    </div>
</template>

<script>
import store from '../vuex/store'

export default {
    created: function() {
        document.getElementsByClassName('body')[1].style.filter="blur(5px)"
    },
    data() {
		if(!store.getters.getLoginStatus.status) {
			alert('请先登录');
			this.$router.replace('/login');
			return {};
		}
		return {
            userInfo: store.getters.getUserInfo,
            tips: '请填写信息',
            oldPassword: '',
            newPassword: '',
            verify: ''
        }
	},
    watch: {
        'verify': function() {
            if(this.verify !== this.newPassword) {
                this.tips = '两次输入的新密码不一致'
            } else {
                this.tips = ''
            }
        },
        'oldPassword': function() {
            if(!this.oldPassword.length) {
                this.tips = '请填写原密码';
            } else if(!this.newPassword.length) {
                this.tips = '请填写新密码';
            } else {
                this.tips = ''
            }
        },
        'newPassword': function() {
            if(!this.newPassword.length) {
                this.tips = '请填写新密码';
            } else if(!this.verify.length) {
                this.tips = '请重复新密码';
            } else {
                this.tips = ''
            }
        }
    },
    methods: {
        goBack: function() {
            let url = `/user/${this.personId}`;
            document.getElementsByClassName('body')[1].style.filter=""
            this.$router.replace(url);
        },
        submit: function() {
            if(this.verify !== this.newPassword) {
                this.tips = '两次输入的新密码不一致'
            } else if(this.oldPassword.length && this.verify.length && this.newPassword.length) {
                this.tips = '正在提交'
            } else {
                this.tips = '请检查信息'
            }
        }
    }
}
</script>

<style lang="less">
.fixed-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;

    .container {
        width: 600px;
        height: 500px;
        margin: 50px auto;
        background-color: rgba(255, 255, 255, 0.7);
        position: relative;
        .go-back-btn {
            background: none;
            background-color: rgba(255, 255, 255, 0.4);
            border: 1px #fff solid;
            border-radius: 10px;
            color: #fff;
            font-size: 18px;
            height: 45px;
            width: 100px;
            line-height: 45px;
            position: absolute;
            bottom: -60px;
            left: 600px;
            &:hover {
                background-color: transparent;
            }
        }
        .content {
            margin: 50px auto;
            width: 250px;
            .text {
                font-size: 16px;
            }
            .tel {
                font-size: 18px;
                color: #3AB882;
            }
            .input {
                width: 250px;
                margin: 10px 0;
            }
            .tips {
                color: #ff0000;
            }
        }
    }
}
</style>
