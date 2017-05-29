<template>
    <div class="body of-hd">
        <TopBar path='班级详情'></TopBar>
        <div class="class-detail">
            <header>
                <h2>班级成员</h2>
                <hr />
            </header>
            <section>
                <MemberList :members="classMember" />
            </section>
            <header>
                <h2>班级Task</h2>
                <hr />
            </header>
            <section>
                <taskListMemberList :task-info="taskInfo" />
            </section>
        </div>
    
    </div>
</template>
<script>
import MemberList from '../components/memberList'
import TopBar from '../components/topBar'

import taskList from '../components/taskList'
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
            taskInfo: [],
            classId: id,
            userid: userid
        }
    },
    created() {
        this.getClassMembers();
        this.getTasks();
    },
    methods: {
        getClassDetail() {

        },
        getClassMembers() {
            let userid = this.userid;
            let courclassid = this.classId;
            let url = "http://" + window.location.hostname + ':8800' + '/api/ThinkPHP.php?m=home&c=search&a=getClassmates';
            axios({
                url: url,
                method: 'post',
                data: { userid: userid, courclassid: courclassid },
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
                console.log(res)
                if (res.status == 200) {
                    let ret = res.data;
                    if (ret.code == 0) {
                        this.classMember = ret.friends;
                        console.log(this.classMember)
                    }
                }
            })
        },
        getTasks() {
            let userid = this.userid;
            let courclassid = this.classId;
            let url = "http://" + window.location.hostname + ':8800' + '/api/ThinkPHP.php?m=home&c=task&a=apptask';
            axios({
                url: url,
                method: 'post',
                data: { userid: userid, courclassid: courclassid },
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
                console.log(res)
                if (res.status == 200) {
                    let ret = res.data;
                    if (ret.code == 0) {
                        this.taskInfo = ret.tasks;
                        // console.log(res)
                    }
                }
            })
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
