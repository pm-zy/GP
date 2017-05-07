<template>
    <div class="register-content">
        <div class="base-info">
            <p>账号信息</p>
            <span class="label">昵称</span>
            <Input v-model="step2.nickname" placeholder="请输入昵称" ></Input>
            <span class="label">手机号</span>
            <Input v-model="step2.telNum"  placeholder="请输入手机号" ></Input>
            <span class="label">邮箱</span>
            <Input v-model="step2.email" type="email" placeholder="请输入邮箱" ></Input>
            <span class="label">密码</span>
            <Input v-model="step2.password" type="password" placeholder="请输入密码" ></Input>
            <span class="label">确认密码</span>
            <Input v-model="ensurePassword" type="password" placeholder="请确认密码" ></Input>
            <span class="info" >{{info}}</span>
            <button class="btn btn-primary" @click="goNext">下一步</button>
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
    margin: 20px auto;
    button {
        margin-top: 20px;
        float: right;
        width: 150px;
    }
    .info {
        color: red;
    }
}
</style>
