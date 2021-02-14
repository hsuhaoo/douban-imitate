<template>
  <div id="header">
    <div class="navWrap">
      <div class="navPrimary">
        <div class="navLogo">
          <router-link to="/">豆瓣读书</router-link>
        </div>
        <div class="navSearch">
          <form action="" method="get" accept-charset="utf-8">
            <div class="inp">
              <input
                v-model="message"
                placeholder="书名、作者、ISBN"
                value=""
              />
            </div>
            <div class="inpBtn" @click="jump()"></div>
          </form>
        </div>
      </div>
    </div>
    <div class="navSecondary">
      <ul class="navItems">
        <li><a href="https://book.douban.com/cart/">购书单</a></li>
        <li>
          <a
            href="https://read.douban.com/ebooks/?dcs=book-nav&dcm=douban"
            target="_blank"
            >电子图书</a
          >
        </li>
        <li>
          <a
            href="https://market.douban.com/book?utm_campaign=book_nav_freyr&utm_source=douban&utm_medium=pc_web"
            >豆瓣书店</a
          >
        </li>
        <li>
          <a
            href="https://book.douban.com/annual/2019?source=navigation"
            target="_blank"
            >2019年度榜单</a
          >
        </li>
        <li>
          <a
            href="https://m.douban.com/standbyme/annual2019?source=navigation"
            target="_blank"
            >2019书影音报告</a
          >
        </li>
        <li class=" book-cart">
          <a
            href="https://market.douban.com/cart/?biz_type=book&utm_campaign=book_nav_cart&utm_source=douban&utm_medium=pc_web"
            target="_blank"
            >购物车</a
          >
        </li>
      </ul>
    </div>
    <a
      href="https://book.douban.com/annual/2019?source=book_navigation"
      class="bookannual"
    ></a>
  </div>
</template>

<script>
import store from "../store.js"

export default {
  name: "Header",
  data() {
    return {
        message:"",
    };
  },
  methods: {
    jump: function() {
      this.$router.push({ name: "search", params: { message: this.message } });
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
/* li{
    display:flex;
} */
.navLogo {
  height: 56px;
  width: 145px;
  margin: 0 13px 0 0;
  background: url(../assets/lg_book_a11_1.png) no-repeat 0 12px;
}
.navLogo a {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  line-height: 100em;
}
#header {
  width: 100%;
  min-width: 1040px;
  margin-bottom: 40px;
  background: #f6f6f1;
  margin: 0 auto;
  position: relative;
}
.navWrap {
  border-bottom: 1px solid #e5ebe4;
}
.navPrimary {
  width: 1040px;
  margin: 0 auto;
  height: 59px;
  padding: 10px 0 5px;
  display: flex;
}
.navSearch form {
  padding: 10px 0px;
  display: flex;
}
.inp input {
  width: 470px;
  height: 30px;
  outline: none;
  border: 0;
  /* border-radius: 5px; */
  box-shadow: 0px 1px 0px #dcdcdc;
  padding: 0px 0px 0px 10px;
}

.inpBtn {
  width: 37px;
  height: 34px;
  background: url(../assets/nav_bk_bg.png) no-repeat 0 -40px;
  border-radius: 1px;
  cursor: pointer;
}
.navSecondary {
  width: 1040px;
  margin: 0 auto;
  padding: 6px 0 6px;
  position: relative;
}

.navItems {
  margin: 0;
  padding: 5px 0;
  overflow: hidden;
  display: flex;
  height: 18px;
}
.navItems a {
  text-decoration: none;
  display: block;
  color: #614e3c;
  text-align: center;
  text-decoration: none;
  margin: 0 12px;
  font-size: 14px;
  cursor: pointer;
}
.navItems a:hover {
  background-color: #614e3c;
  color: white;
}
.bookannual {
  position: absolute;
  width: 186px;
  height: 96px;
  top: 10px;
  left: 50%;
  margin-left: 320px;
  background: url(../assets/annual_2019.png) center/contain no-repeat;
}
.book-cart {
  padding-left: 5px;
  margin-left: 12px;
  background-image: url(http://img3.doubanio.com/dae/accounts/resources/19870c3/book/assets/icon_myorders.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 15px;
}
.book-cart a {
  /* margin-left: 18px; */
}
</style>
