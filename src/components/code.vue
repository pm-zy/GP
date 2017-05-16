<template>
    <div class="code-question">
        <div class="question">

        </div>
        <div class="code-container ">
            <code contenteditable="true">
            </code>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    created() {

    }
}
</script>

<style lang="less">
.code-question {
    .question {

    }
    .code-container {
        code {
            display: block;
            background-color: #DFF0D1;
            color: #333;
            width: 700px;
            height: 500px;
        }
    }
}
</style>
