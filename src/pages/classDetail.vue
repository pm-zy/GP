<template>
    <div class="class-detail">
        <header>
            <h2>班级成员</h2>
        </header>
        <section>
            <MemberList :members="classMember" />
        </section>
    </div>
</template>
<script>
import MemberList from '../components/memberList'

export default {
    components: {
        MemberList
    },
    data() {
        return {
            classMember: [
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
        }
    },
    created() {
        getClassMember();
    },
    methods: {
        getClassDetail() {

        },
        getClassMember() {
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
