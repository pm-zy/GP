<template>
    <div class="register-content">
        <form>
            <div class="stu-info">
                <p>个人信息</p>
                <span class="label">姓名</span>
                <Input v-model="step2.name" placeholder="请输入姓名" ></Input>
                <Radio-group v-model="userType">
                    <Radio label="学生" ></Radio>
                    <Radio label="教师" ></Radio>
                </Radio-group><br />
                <span class="label">学号/工号</span>
                <Input v-model="step2.personId" placeholder="请输入学号或工号" ></Input>
                <span class="label">学校</span>
                <Input v-model="step2.school" placeholder="请输入学校" ></Input>
                <span class="label">学院</span>
                <Input v-model="step2.college" placeholder="请输入学院" ></Input>
                <span class="label">专业</span>
                <Input v-model="step2.major" placeholder="请输入专业" ></Input>
                <span class="label">班级</span>
                <Input v-model="step2.cls" placeholder="请输入行政班级" ></Input>
            </div>
            <div class="btn-div">
                <button class="btn btn-success" @click="goPrevious">上一步</button>
                <input type="reset"  class="btn btn-info" name="" value="重置">
                <input type="submit"  class="btn btn-primary" name="" value="提交">

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
            let step1 = this.$store.getNewUser1();
            let userData = {};
            for(let p in step1) {
                userData[p] = step[p];
            }
            for(let p in this.step2) {
                userData[p] = this.step2[p]
            }
            // ajax
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
.btn-div {
    float: right;
    input {
        width: 150px;
        margin: 20px;
    }
    button {
        float: left;
        margin-right: 20px;
    }
}
.label {
    color: #333;
    font-size: 16px;
    line-height: 28px;
    font-weight: normal;
}

</style>
