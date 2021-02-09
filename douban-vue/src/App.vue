<template>
  <div id="app">
    <Nav/>
    <Header/>
    <router-view ></router-view>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
import Header from './components/header.vue'




export default {
  name: 'App',
  components: {
    Nav,
    Header,
  },
  provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。                                             
            return {
                reload: this.reload                                              
            }
  },
  data() {
      return{
          isRouterAlive: true                    //控制视图是否显示的变量
      }
  },
  methods: {
      reload () {
          this.isRouterAlive = false;            //先关闭，
          this.$nextTick(function () {
              this.isRouterAlive = true;         //再打开
          }) 
      }
  },
  // computed: {
  //   key() {
  //   return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date();
  //   }
  // }
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
}
.container {
    width: 1040px;
    margin: 0 auto;
    display: flex;
}
.main{
    flex:2;
}
.aside{
    flex:1;
    margin-left: 50px;
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
