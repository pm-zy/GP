<template>
  <div class="body">
    <LeftPanel v-show="showLeft"></LeftPanel>
    <div class="right-container">
       <router-view reload="false"
        class='view'
        keep-alive
        transition
        transition-mode='out-in'>
      </router-view>
    </div>
  </div>
</template>

<script>
import LeftPanel from './components/leftPanel'
// let showLeft = true;
export default {
    name: 'app',
    components: {
        LeftPanel
    },
    watch: {
        '$route': function () {
            let path = this.$route.path;
            if(path.match('login') || path.match(/(task\/{1}[0-9]*)$/) || path.match('register')) {
                this.showLeft = false;
            }
            else {
                this.showLeft = true
            }
        }
    },
    mounted: function () {
        let path = this.$route.path;
        if(path.match('login') || path.match(/(task\/{1}[0-9]*)$/) || path.match('register')) {
            this.showLeft = false;
        }
        else {
            this.showLeft = true
        }
    },
    data () {
        return {
            showLeft: true
        }
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
