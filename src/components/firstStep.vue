<template>
    <div class="register-content">
        <div class="base-info">
            <h3>账号信息</h3>
            <div class="input-div">
                <i class="fa fa-user fa-fw  fa-fw"></i>
                <input v-model="step2.nickname" placeholder="请输入昵称" >
            </div>

            <div class="input-div">
                <i class="fa fa-phone fa-fw"></i>
                <input v-model="step2.telNum"  placeholder="请输入手机号" >
            </div>

            <div class="input-div">
                <i class="fa fa-envelope fa-fw"></i>
                <input v-model="step2.email" type="email" placeholder="请输入邮箱" >
            </div>

            <div class="input-div">
                <i class="fa fa-unlock-alt  fa-fw"></i>
                <input v-model="step2.password" type="password" placeholder="请输入密码" >
            </div>

            <div class="input-div">
                <i class="fa fa-unlock  fa-fw"></i>
                <input v-model="ensurePassword" type="password" placeholder="请确认密码" >
            </div>

            <span class="info" >{{info}}</span>
            <button class="btn" @click="goNext">下一步</button>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            step2: {
                nickname: '',
                password: '',
                email: '',
                telNum: '',
            },
            ensurePassword: '',
            info: ''
        }
    },
    methods: {
        setState() {
            this.step1.class = this.step1.cls;
            this.$store.commit('changeNewUser1', this.step1)
        },
        goNext() {
            let isGoNext = true;
            for (let p in this.step2)　{
                console.log(this.step2[p]);
                if(!(this.step2[p] && this.step2[p].length)) {
                    this.info = `请填写全部项`;
                    isGoNext = false;
                    break;
                }
            }

            if(isGoNext) {
                this.$router.replace('/register/secondStep')
            }
        }
    }
}
</script>
<style lang="less">
.register-content {
    min-width: 400px;
    max-width: 700px;
    position: relative;
    top: -330px;
    left: 330px;
    .base-info, .stu-info {
        text-align: left;
        h3 {
            color: #71B6B5;
            font-weight: bold;
            margin-left: -20px;
        }
        .input-div {
            width: 350px;
            text-align: left;
            height: 40px;
            line-height: 40px;
            margin-top: 5px;
            border-bottom: 1px #ccc solid;
            color: #777;
            font-size: 16px;
            i {
                display: inline-block;
                margin-right: 15px;

            }
            input {
                border: none;
                height: 30px;
                font-size: 15px;
                &:focus {
                    outline: none;
                }
            }
        }
        .btn {
            margin-top: 20px;
            float: right;
            margin-right: 150px;
            width: 150px;
            color: #fff;
            border-radius: 15px;
            background-color: #71B6B5;
            &:focus {
                outline: none;
            }
            &:hover {
                background-color: #5AA2A0;
            }

        }
        .info {
            color: red;
            display: inline-block;
            margin-top: 5px;
        }
    }

}
</style>
