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
                <a onclick="" :href="dataList[index].href">
                    <img :src="dataList[index].src"
                    :alt="dataList[index].title" class="">
                </a>
                </div>
                <div class="info">
                    <h4 class="title">
                        <a onclick=""
                        :href="dataList[index].href" class="">{{dataList[index].title}}</a>
                    </h4>
                    <p class="entry-star-small">
                        <!-- <ul class="star">
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                        </ul> -->
                        <Star :score="dataList[index].rating/2"/>
                        <span class="average-rating">
                            {{dataList[index].rating}}
                        </span>
                    </p>
                    <p class="author">
                        {{dataList[index].author}}
                    </p>
                    <p class="book-list-classification">
                        {{dataList[index].classification}}
                    </p>
                    <p class="extra-info">
                        <span class="meta-label" v-if="dataList[index].extra">
                            有电子书
                          </span>
                    </p>
                </div>
                    <p class="reviews">
                    {{dataList[index].reviews.replace("()","")}}
                    (<a onclick="moreurl(this, {from:'pop_fiction'})" :href="dataList[index].reviews_href">{{dataList[index].reviews_text}}</a>)
                    </p>
            </li>
          </ul>
        </div>
      </div>
</template>
<script>
    import SectionNav from './sectionNav.vue'
    import Star from './star.vue'
    let dataList = require('../data/popularBook')
    export default{
        name:"PopularBook",
        data(){
            return{
                items : [...Array(10).keys()],
                dataList: dataList,
            }
        },
        components:{
            SectionNav,
            Star,
        },
        // computed:{
        //     reviewData:  function(){
        //         let a = this.dataList.map(function(data){
        //             return data.reviews.slice(0,-2);
        //         });
        //         console.log(a);
        //         return this.dataList;
        //     }
        // },
    }
    </script>

<style scoped>
.list-col {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 660px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}
.cover{
    height: 120px;
}
a{
    color: #3377aa;
}
.list-col li{
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
}
.info {
    margin: 0 20px;
    max-width: 200px;
    height: 120px;
}
.star{
    display: inline-block;
}
.star li {
    width: 13px;
    display: inline-block;
}
p{
    margin: 0;
}
.reviews{
    flex-basis: 100%;
    color: #666;
    padding-top: 15px;
}
img{
    width: auto;  
    height: 120px;
}
.moreMeta{
    display: none;
}
.title {
    font-size: 15px;
    height: auto;
    margin: 0;
}
.title a:hover, .reviews a:hover{
    background-color: #37a;
    color: white;
}
.meta-label{
    color: white;
    background: #a1a1a1;
}
</style>
