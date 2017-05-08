<template>
    <div class="register-content">
        <form>
            <div class="stu-info">
                <h3>个人信息</h3>
                <input  v-model="step2.name" placeholder="姓名" >
                <Radio-group v-model="userType">
                    <Radio label="学生" ></Radio>
                    <Radio label="教师" ></Radio>
                </Radio-group><br />
                <input  v-model="step2.personId" placeholder="学号或工号" >
                <input  v-model="step2.school" placeholder="学校" >
                <input  v-model="step2.college" placeholder="学院" >
                <input  v-model="step2.major" placeholder="专业" >
                <input  v-model="step2.cls" placeholder="行政班级" >
            </div>
            <div class="btn-div">
                <button class="btn btn-prev" @click="goPrevious">上一步</button>
                <button type="reset" class="btn btn-danger">重置</button>
                <button type="button" class="btn btn-submit" @click="submit">提交</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            step2: {
                name: '',
                personId: '',
                school: '',
                college: '',
                major: '',
                cls: ''
            },
            userType: 0,
        }
    },
    watch: {
        'userType': function() {
            if(this.userType == '学生') {
                this.step2.userType = 1;
            }
            else {
                this.step2.userType = 0;
            }
        }
    },
    methods: {
        setState() {
            this.step2.class = this.step2.cls;
            this.$store.commit('changeNewUser2', this.step2)
        },
        goPrevious() {
            this.$router.replace('/register/firstStep')
        },
        submit(){
            let step1 = this.$store.getNewUser1;
            let userData = {};
            for(let p in step1) {
                userData[p] = step[p];
            }
            for(let p in this.step2) {
                userData[p] = this.step2[p]
            }
            // ajax
            console.log('fsdfs')
            this.$router.replace('/login');
        }
    }
}
</script>
<style lang="less">
.base-info, .stu-info {
    padding: 20px 80px;
    .ivu-radio-group {
        margin-top: 10px;
    }
}
.base-info > p, .stu-info > p {
    margin-left: -50px;
    font-size: 18px;
}
.stu-info {
    padding-top: 0;
    input {
        display: block;
        font-size: 15px;
        height: 33px;
        line-height: 33px;
        width: 320px;
        border: none;
        border-bottom: 1px #ccc solid;
        margin-top: 8px;
        padding-left: 5px;
        &:focus {
            outline-color: #88cac9;
        }
    }
}
.btn-div {
    width: 400px;
    margin-left: 100px;
    // float: right;
    display: flex;
    justify-content: space-between;
    input {
        width: 150px;
        margin: 20px;
    }
    button {
        float: left;
        width: 100px;
        border-radius: 15px;
        margin-right: 20px;
        &:focus {
            outline: none;
        }
        &:active:focus {
            outline: none;
        }
    }
    .btn-prev {
        border: 1px #71B6B5 solid;
        color: #71B6B5;
        background-color: transparent;
    }
    .btn-submit {
        background-color: #71b6b5;
        color: #fff;
    }
}
.label {
    color: #333;
    font-size: 16px;
    line-height: 28px;
    font-weight: normal;
}

</style>
