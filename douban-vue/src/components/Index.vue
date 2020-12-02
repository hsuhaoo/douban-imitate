<template>
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
  </template>
  
  <script>
  import NewBook from './newBook.vue'
  import BookInfo from './bookInfo.vue'
  import PopularBook from './popularBook.vue'
  import Ebook from './ebook.vue'
  import Review from './review.vue'
  import Market from './market.vue'
  import Tag from './tag.vue'
  import Book250 from './book250.vue'
  import TopBook from './topBook.vue'
  
  
  
  
  export default {
    name: 'Index',
    components: {
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