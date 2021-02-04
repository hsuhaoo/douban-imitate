<template>
  <div class="main">
    <PopularBook title="最受关注图书｜虚构类" :fiction="true" />
    <PopularBook title="最受关注图书｜非虚构类" :fiction="false" />
    <Market />
    <Cate />
  </div>
</template>

<script>
import PopularBook from "./popularBook.vue";
import Market from "./market.vue";
import Cate from "./cate.vue";

export default {
  name: "Index",
  components: {
    PopularBook,
    Market,
    Cate,
  },
};
</script>

<style>
.main {
  width: 650px;
  margin: 0 auto;
  /* overflow: hidden; */
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
