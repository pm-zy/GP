<template>
    <div class="code-question">
        <div class="question">

        </div>
        <div class="code-container ">
            <editor :content="请在此处写代码" :lang="'sql'" :theme="'chrome'" v-bind:content-update="XXX"></editor>
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
            content: {}
        }
    },
    created() {

    },
    methods: {
       editorInit:function () {
       },
       XXX: function (v) {
       console.log(v);
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
}
</style>
