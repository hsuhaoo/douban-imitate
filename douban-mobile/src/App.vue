<template>
  <div id="app">
    <Nav/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Nav from './components/nav.vue'
// import Header from './components/header.vue'




export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin: 0;
  background: #f6f6f6;
  position: relative;
}

a {
  font-weight: normal;
  text-decoration: none;
  color: #3377aa;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
h3 {
  font-size: 15px;
}
</style>
