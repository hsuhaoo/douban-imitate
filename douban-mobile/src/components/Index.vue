<template>
      <div class="main">
          <PopularBook title="最受关注图书｜虚构类"/>
          <PopularBook title="最受关注图书｜非虚构类"/>
      </div>
  </template>
  
  <script>
  import PopularBook from './popularBook.vue'
  
  
  
  
  export default {
    name: 'Index',
    components: {
      PopularBook,
    }
  }
  </script>
  
  <style>
  .main {
      width: 1040px;
      margin: 0 auto;
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