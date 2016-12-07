<template>
  <div class="body">
    <LeftPanel></LeftPanel>
    <div class="right-container">
       <router-view
        class='view'
        keep-alive
        transition
        transition-mode='out-in'>
      </router-view>
    </div>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import LeftPanel from './components/leftPanel'

  export default {
    name: 'app',
    components: {
      LeftPanel
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
