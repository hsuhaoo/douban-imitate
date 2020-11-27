<template>
  <div id="app">
    <Nav/>
    <Header/>
    <div class="container">
      <div class="main">
        <NewBook/>
        <BookInfo/>
        <PopularBook/>
        <Market/>
        <Ebook/>
        <Review/>
      </div>
      <div class="aside">
        <Tag/>
        <TopBook/>
        <Book250/>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
import Header from './components/header.vue'
import NewBook from './components/newBook.vue'
import BookInfo from './components/bookInfo.vue'
import PopularBook from './components/popularBook.vue'
import Ebook from './components/ebook.vue'
import Review from './components/review.vue'
import Market from './components/market.vue'
import Tag from './components/tag.vue'
import Book250 from './components/book250.vue'
import TopBook from './components/topBook.vue'




export default {
  name: 'App',
  components: {
    Nav,
    Header,
    NewBook,
    BookInfo,
    PopularBook,
    Ebook,
    Review,
    Market,
    Tag,
    Book250,
    TopBook
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
