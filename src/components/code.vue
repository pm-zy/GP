<template>
    <div class="code-question">
        <div class="question">

        </div>
        <div class="code-container ">
            <editor :content="content" lang="javascript" theme="chrome" ></editor>
        </div>
        <div >
            {{content}}
        </div>
    </div>
</template>
<script>
import editor from 'ace-vue2'
import 'brace/mode/javascript'
import 'brace/theme/chrome'
export default {
    components: {
        editor
    },
    data() {
        return {
            content: ""
        }
    },
    created() {

    },
    watch: {
        'content': function () {
            console.log(this.content)
        }
    },
    methods: {

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
}
</style>
