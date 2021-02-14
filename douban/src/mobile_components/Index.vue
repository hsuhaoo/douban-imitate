<template>
  <div class="main">
    <PopularBook title="最受关注图书｜虚构类" :fiction="true" />
    <PopularBook title="最受关注图书｜非虚构类" :fiction="false" />
    <Market />
    <Cate />
    <Foot />
  </div>
</template>

<script>
import PopularBook from "./popularBook.vue";
import Market from "./market.vue";
import Cate from "./cate.vue";
import Foot from "./foot.vue";

export default {
  name: "Index",
  components: {
    PopularBook,
    Market,
    Cate,
    Foot,
  },
};
</script>

<style>
.main {
  max-width: 650px;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
}
a {
  font-weight: normal;
  text-decoration: none;
  /* color: #3377aa; */
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
