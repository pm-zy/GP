<template>
    <div class="code-question">
        <div class="question">
            <p class="in-exam"><span>输入: </span>{{question.inputexam}}</p>
            <p class="out-exam"><span>输出: </span>{{question.outexam}}</p>
        </div>
        <div class="code-container ">
            <editor :content="content" lang="c_cpp" theme="chrome" ></editor>
        </div>
        <div class="btn-container">
            <input type="button" class="btn btn-success" value="运行代码" @click="getValue">
            <input type="button" class="btn btn-danger" value="提交代码">
        </div>
    </div>
</template>
<script>
import editor from 'ace-vue2'
import 'brace/mode/c_cpp'
import 'brace/snippets/c_cpp'
import 'brace/theme/chrome'
export default {
    props: [ 'question' ],
    components: {
        editor
    },
    data() {
        return {
            content: "",
            code: '',
        }
    },
    created() {
    },
    watch: {
        'content': function () {
        }
    },
    methods: {
        getValue() {           
            console.log(this.$children);
            console.log(this.$children[0].getValue());

        }
   },

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
        font-family: Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace;
    }
    .btn-container {
        margin-top: 20px;
    }
}
</style>
