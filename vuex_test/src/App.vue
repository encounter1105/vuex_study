<template>
  <div id="app">
    <!--<count></count>-->
    <test1></test1>
  </div>
</template>

<script>
import count  from './components/count.vue'
import test1  from './components/Test1.vue'

export default {
  name: 'App',
  components: {
    count, test1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
