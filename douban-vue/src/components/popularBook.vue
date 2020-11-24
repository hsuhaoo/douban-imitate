<template>
    <div class="popular-books">
        <SectionNav title="最受关注图书榜">
            <span class="link-more">
                <a href="/chart?subcat=F&amp;icn=index-topchart-fiction">虚构类»</a>
              </span>
              <span class="link-more">
                <a href="/chart?icn=index-topchart-nonfiction">非虚构类»</a>
            </span>
        </SectionNav>
        <div class="bd">
          <ul class="list-col"
            data-dstat-areaid="61" data-dstat-mode="click,expose">
            <li class="" v-for="(item,index) in items" :key="index">
                <div class="cover">
                <a onclick="" href="https://book.douban.com/subject/35005045/?icn=index-topchart-subject">
                    <img src="https://img3.doubanio.com/view/subject/s/public/s33718940.jpg"
                    alt="夜晚的潜水艇" class="">
                </a>
                </div>
                <div class="info">
                <h4 class="title">
                    <a onclick=""
                    href="https://book.douban.com/subject/35005045/?icn=index-topchart-subject" class="">夜晚的潜水艇</a>
                </h4>
                <p class="entry-star-small">
                    <span class="allstar45 star-img">
                    </span>
                    <span class="average-rating">
                    9.0
                    </span>
                </p>
                <p class="author">
                    作者：陈春成
                </p>
                <p class="book-list-classification">
                    短篇小说&nbsp;/&nbsp;中国文学
                </p>
                <p class="extra-info">
                    
                </p>
                    
                    <p class="reviews">
                    在看不见硝烟的生活里，这本书能带给你安宁
                    (<a onclick="moreurl(this, {from:'pop_fiction'})" href="https://book.douban.com/review/12909258/?icn=index-topchart-subject">单读评论</a>)
                    </p>
                </div>
            </li>
          </ul>
        </div>
      </div>
</template>
<script>
    import SectionNav from './sectionNav.vue'
    export default{
        name:"PopularBook",
        data(){
            return{
                items : [...Array(10).keys()],
                infos : ['下载豆瓣客户端', '登录/注册']
            }
        },
        components:{
            SectionNav,
        }
    }
    </script>

<style scoped>
ul {
    list-style: none;
    width: 100%;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-column-gap: 9px;
}


img{
    width: 100px;  
    height: auto;
}
.moreMeta{
        display: none;
}
.link-more{
        font-size: 13px;
        color: #3377aa;
        margin: 15px;
}
</style>
