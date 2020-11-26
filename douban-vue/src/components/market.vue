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
                <div class="pic" style="background-image: url(https://qnmob3.doubanio.com/view/freyr_page_photo/raw/public/6882.jpg?imageView2/2/q/80/w/212/h/280/format/png)"></div>
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
          <ul class="list-col list-col5">
              
              <li v-for="(item,index) in items" :key="index">
                <div class="cover">
                  <a href="https://market.douban.com/book/liubo?utm_campaign=book_freyr_section&amp;utm_source=douban&amp;utm_medium=pc_web" target="_blank">
                    <img src="https://qnmob3.doubanio.com/view/freyr_page_photo/raw/public/6836.jpg?imageView2/2/q/80/w/212/h/280/format/png" width="106" height="140" alt="刘勃历史三部曲"/>
                  </a>
                </div>
                <div class="info">
                  <div class="title">
                    <a href="https://market.douban.com/book/liubo?utm_campaign=book_freyr_section&amp;utm_source=douban&amp;utm_medium=pc_web" target="_blank">刘勃历史三部曲</a>
                  </div>
                  <div class="price">￥88.00</div>
                </div>
              </li>
          </ul>
        </div>
      </div>
</template>

<script>
    import SectionNav from './sectionNav.vue'
    export default{
        name:"Market",
        data(){
            return{
                items : [...Array(5).keys()],
                infos : ['下载豆瓣客户端', '登录/注册']
            }
        },
        components:{
            SectionNav,
        }
    }
    </script>

<style scoped>
.list5 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-column-gap: 9px;

}

.img{
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
</style>