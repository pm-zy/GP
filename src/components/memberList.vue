<template>
    <ul class="">
        <li v-for="member of members" class="member-list">
            <p>
                <span class="tips">昵称: </span>{{member.nickname}}
                <span class="tips">姓名: </span>{{member.name}}
                <span class="tips">ID: </span>{{member.userid}}
            </p>
        </li>
    </ul>
</template>
<script>
export default {
    props: ['members'],
    data() {
        console.log(this.members);
        return {

        }
    }
}
</script>
<style lang="less">
.member-list {
    background-color: #fff;
    margin: 10px 20px;
    border-left: #a1ceeb 5px solid;
    padding: 5px 10px;
    display: inline-block;
    width: 300px;
    .tips {
        color: rgb(47, 108, 168);
        font-weight: bold;
    }
}
</style>
