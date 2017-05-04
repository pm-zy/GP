<template>
    <ul clas
        <li v-for="member of members">
            {{member.nickname}}
        </li>
    </ul>
</template>
<script>
export default {
    props: ['members']
}
</script>
<style>
.member-list {
    li {
        border-left: 5px #abcdef solid;
    }
}
</style>
