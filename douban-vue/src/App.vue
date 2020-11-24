<template>
  <div id="app">
    <Nav/>
    <Header/>
    <div class="container">
      <div class="main">
        <NewBook/>
        <BookInfo/>
      </div>
      <div class="aside"></div>
    </div>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
import Header from './components/header.vue'
import NewBook from './components/newBook.vue'
import BookInfo from './components/bookInfo.vue'


export default {
  name: 'App',
  components: {
    Nav,
    Header,
    NewBook,
    BookInfo,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
}
</style>
