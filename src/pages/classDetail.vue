<template>
    <div class="class-detail">
        <header>
            <h2>班级成员</h2>
            <hr /> 
        </header>
        <section>
            <MemberList :members="classMember" />
        </section>
    </div>
</template>
<script>
import MemberList from '../components/memberList'
import axios from 'axios'
import store from '../vuex/store'
export default {
    components: {
        MemberList
    }, 
    
    data() {
        console.log(this.$router.history.current.params.id)
        let id = this.$router.history.current.params.id;
        let userid = store.getters.getUserInfo.userid;
        return {
            classMember: [
            ],
            tasks: [],
            classId: id,
            userid: userid
        }
    },
    created() {
        this.getClassMembers();
    },
    methods: {
        getClassDetail() {

        },
        getClassMembers() {
            // axios.post('m=Home&c=search&a=getClassFiriends', {
            //     userid: store.getters.getUserInfo.userid,
            //     courclassid: this.clasId
            // }).then(res => {
            //     this.classMember = res.friends
            // })
            this.classMember = [
                {
                    "nickname": "小明",
                    "score": "90"

                }, {
                    "nickname": "小白",
                    "score": "90"

                }, {
                    "nickname": "小发",
                    "score": "90"

                }, {
                    "nickname": "小分为",
                    "score": "90"

                }, {
                    "nickname": "谔谔",
                    "score": "90"

                }, {
                    "nickname": "规范",
                    "score": "90"

                }, {
                    "nickname": "个人",
                    "score": "90"

                }, {
                    "nickname": "公司",
                    "score": "90"

                }, {
                    "nickname": "额个",
                    "score": "90"

                }, {
                    "nickname": "位法",
                    "score": "90"

                }, {
                    "nickname": "收费额",
                    "score": "90"

                }, {
                    "nickname": "发瑟夫",
                    "score": "90"

                }, {
                    "nickname": "为人分",
                    "score": "90"

                },
            ]
        },
        getTasks() {
            // axios.post('/m=Home&c=task&a=apptask', {
            //     userid: this.userid,
            //     courclass: this.courclassid
            // }).then(res => {
            //     this.tasks = res.tasks
            // })
        }
    },


}
</script>
<style lang="less">
.class-detail {
    h2 {
        margin: 0;
        padding: 0;
    }
}
</style>
