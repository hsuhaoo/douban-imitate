<template>
    <div class="market-books">
        <SectionNav title="豆瓣书店">
            <span class="link-more">
              <a href="https://market.douban.com/book/?utm_campaign=book_freyr_section&amp;utm_source=douban&amp;utm_medium=pc_web">查看全部»</a>
            </span>
        </SectionNav>
        <div class="bd">
          
          <div class="top">
            <div class="cover">
              <a href="https://market.douban.com/book/rickandmorty?utm_campaign=book_freyr_section&amp;utm_source=douban&amp;utm_medium=pc_web">
                <div class="pic"></div>
              </a>
            </div>
            <div id="market_books_header_info" class="info">
              <p class="title">平行宇宙的艺术
                <span class="price">￥117.60</span>
                  <span class="free_delivery">／包邮 </span>
              </p>
              <p class="desc indent-paragraph" data-row="4">Rick and Morty首部官方设定集，主题贴纸限量送</p>
            </div>
          </div>
          <ul class="list-col list-col5" v-if="ready">
              
              <li v-for="(item,index) in items" :key="index">
                <div class="cover">
                  <a :href="dataList[index].href" target="_blank">
                    <img :src="'../picture/'+dataList[index].src.match(/[0-9]+.jpg/i).slice(-1)" width="106" height="140" :alt="dataList[index].title"/>
                  </a>
                </div>
                <div class="info">
                  <div class="title">
                    <a :href="dataList[index].href" target="_blank">{{dataList[index].title}}</a>
                  </div>
                  <div class="price">{{dataList[index].price}}</div>
                </div>
              </li>
          </ul>
        </div>
      </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    // let dataList = require('../data/marketBook')
    export default{
        name:"Market",
        data(){
            return{
                items : [...Array(5).keys()],
                dataList: null,
                ready: false,
            }
        },
        components:{
            SectionNav,
        },
        mounted() {
            this.$axios
                .get("http://localhost:8081/indexData/marketBook", {
                    responseType: "json",
                })
                .then((response) => {
                    this.dataList = response.data;
                    // console.log(this.dataList);
                    this.ready = true;
                });
        },
    }
    </script>

<style scoped>
ul {
    width: 660px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
/* li{
  width: 120px;
  padding-right: 12px;
}
li :nth-last-child(1){
  padding-right:0px;
} */
li .info .title{
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.top .title{
  font-size: 23px;
  line-height: 32px;
  margin-bottom: 6px;
}
.top{
  display: flex;
  margin-bottom: 30px;
}
.pic{
  width: 130px;
  height: 172px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
img{
    width: 100px;  
    height: auto;
}
.moreMeta{
        display: none;
}
.linkMore{
        font-size: 13px;
        color: #3377aa;
        margin: 15px;
}
.info .title a:hover{
    background-color: #37a;
    color: white;
}
.pic{
  background-image: url('../assets/6882.png');
}
.top .info .title .price {
    font-size: 17px;
    color: #E76648;
    margin-left: 17px;
}
.top .info .title .free_delivery {
    font-size: 14px;
    color: #E76648;
    position: relative;
    top: -1px;
}
.top .info .desc {
    margin: 0;
    color: #9B9B9B;
    font-size: 14px;
    line-height: 20px;
}
</style>