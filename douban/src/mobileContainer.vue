<template>
  <div>
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './mobile_components/nav.vue'




export default {
  name: 'mobileContainer',
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
body {
  margin: 0;
  color: #191919;
  font-size: 12px;
  font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
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
