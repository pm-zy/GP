<template>
    <div class="code-question">
        <div class="question">
            <p class="in-exam"><span>输入: </span>{{question.inputexam}}</p>
            <p class="out-exam"><span>输出: </span>{{question.outexam}}</p>
        </div>
        <div class="code-container ">
            <editor :content="content" lang="c_cpp" theme="chrome" v-on:change="change"></editor>
        </div>
        <div class="btn-container">
            <input type="button" class="btn btn-success" value="运行代码" @click="run">
            <input type="button" class="btn btn-danger" value="保存代码" @click="save">
        </div>
        <p>{{pass}}</p>
    </div>
</template>
<script>
import editor from 'ace-vue2'
import 'brace/mode/c_cpp'
import 'brace/theme/chrome'
export default {
    props: ['question', 'codes'],
    components: {
        editor
    },
    data() {
        return {
            content: "",
            code: '',
            pass: '',
        }
    },
    created() {
    },
    watch: {
        'content': function () {
        } 
    },
    methods: {
        run() {
            console.log(this.$children);
            console.log(this.$children[0].getValue());
            let code = this.codes;
            // ajax

        },
        change(doc) {
            this.codes = doc;
        },
        save() {

        }
    },

}
</script>

<style lang="less">
.code-question {
    .question {}
    .code-container {
        code {
            display: block;
            background-color: #DFF0D1;
            color: #333;
            width: 700px;
            height: 500px;
        }
        font-family: Monaco,
        Menlo,
        "Ubuntu Mono",
        Consolas,
        source-code-pro,
        monospace;
    }
    .btn-container {
        margin-top: 20px;
    }
}
</style>
